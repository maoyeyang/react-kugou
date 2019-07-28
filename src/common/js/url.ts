export const UrlToParams = (url: string) => {
  const paramsString: string = url.split('?').pop() || ''
  const paramsArr: string[] = paramsString.substr(0).split('&')
  const params: any = {}
  for (let i = 0; i < paramsArr.length; i++) {
    let aParam = paramsArr[i].split('=')
    params[aParam[0]] = aParam[1]
  }
  return params
}
