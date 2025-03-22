/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-02 00:01:01
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 22:43:44
 * @Description : 检查字符是否为 http 网址
 */
/**
 * @group 类型检查
 * @param string 检查字符串是否为 http 地址
 * @returns
 */
export function isHttpUrl(string: string): boolean {
  let url

  try {
    url = new URL(string)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}
