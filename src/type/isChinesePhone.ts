/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-01 18:32:48
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 21:55:21
 * @Description : 检查是否为中国大陆号码
 */

/**
 * @group 工具函数
 * @param number 待检测的手机号码
 * @returns
 */
export function isChinesePhone(number: string): boolean {
  // const phoneReg =
  //   /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/
  const phoneReg = /^1[3-9]\d{9}$/
  return phoneReg.test(number)
}
