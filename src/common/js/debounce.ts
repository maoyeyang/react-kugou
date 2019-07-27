function debounce(fn: Function, time: number) {
  let previous = 0
  let timer: NodeJS.Timer | null = null
  return function(...args: any) {
    let now = +new Date()
    if (time > now - previous) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        previous = now
        fn.apply(args)
      }, time)
    } else {
      previous = now
      fn.apply(args)
    }
  }
}

export default debounce
