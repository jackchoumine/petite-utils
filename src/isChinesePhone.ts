export function isChinesePhone(number: string): boolean {
  // const phoneReg =
  //   /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/
  const phoneReg = /^1[3-9]\d{9}$/
  return phoneReg.test(number)
}
