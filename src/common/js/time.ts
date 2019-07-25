export const PrefixInteger = (num: number, n: number) => {
  return (Array(n).join('0') + num).slice(-n)
}
export const getSongTime = (time: number, n: number = 2) => {
  return `${PrefixInteger(parseInt(time / 60 + ''), n)}:${PrefixInteger(
    time % 60,
    n
  )}`
}
