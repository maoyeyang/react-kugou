export const PrefixInteger = (num: number, n: number) => {
  return (Array(n).join('0') + num).slice(-n)
}
export const getSongTime = (time: number, n: number = 2) => {
  return `${PrefixInteger(parseInt(time / 60 + ''), n)}:${PrefixInteger(
    time % 60,
    n
  )}`
}
export const getYearMonthDay = (timestamp: number) => {
  if (timestamp) {
    var time = new Date(timestamp * 1000)
    var y = time.getFullYear() //getFullYear方法以四位数字返回年份
    var M = time.getMonth() + 1 // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
    var d = time.getDate() // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
    return y + '-' + M + '-' + d
  } else {
    return ''
  }
}
