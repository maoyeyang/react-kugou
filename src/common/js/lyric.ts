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
    currentTime: 0,
    curNum: 0
  }
  return res
}
export const show = (currentTime: number, lyric: any) => {
  for (let i = 0; i < lyric.lines.length; i++) {
    if (currentTime * 1000 <= lyric.lines[i].time) {
      return i - 1
    }
  }
  return lyric.lines.length - 1
}
