const timeExp = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g

export const initLyric = (lyr: string) => {
  const lines = lyr.split('\n')
  let res: any
  let linesArr = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    let result: any = timeExp.exec(line)
    if (result) {
      const txt = line.replace(timeExp, '').trim()
      if (txt) {
        linesArr.push({
          time:
            result[1] * 60 * 1000 + result[2] * 1000 + (result[3] || 0) * 10,
          txt
        })
      }
    }
  }
  linesArr &&
    linesArr.sort((a: any, b: any) => {
      return a.time - b.time
    })
  res = {
    lines: linesArr,
    state: true,
    curNum: 0,
    startStamp: null,
    playTime: 0
  }
  return res
}

export const play = (lyric: any) => {
  return {
    ...lyric,
    startStamp: +new Date()
  }
}
export const stop = (lyric: any) => {
  let playTime = lyric.playTime + +new Date() - lyric.startStamp
  return {
    ...lyric,
    playTime
  }
}
export const show = (lyric: any) => {
  if (lyric.state) {
    const time = +new Date() - lyric.startStamp + lyric.playTime
    for (let i = 0; i < lyric.lines.length; i++) {
      if (time <= lyric.lines[i].time) {
        return i - 1
      }
    }
  } else {
    for (let i = 0; i < lyric.lines.length; i++) {
      if (lyric.playTime <= lyric.lines[i].time) {
        return i - 1
      }
    }
  }
  return lyric.lines.length - 1
}
