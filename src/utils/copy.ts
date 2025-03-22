/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-28 10:20:59
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 21:54:35
 * @Description : 复制文本
 */
/**
 * @group 工具函数
 * @description  copy text
 * @param text some text you want to copy
 * @returns
 */
export function copy(text: string): Promise<boolean> {
  if (navigator.clipboard && navigator.permissions) {
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        return Promise.resolve(true)
      })
      .catch(() => {
        return Promise.resolve(false)
      })
  } else {
    return new Promise(resolve => {
      const textArea = document.createElement('textArea')
      // @ts-ignore
      textArea.value = text
      textArea.style.width = '0px'
      textArea.style.position = 'fixed'
      textArea.style.left = '-999px'
      textArea.style.top = '10px'
      textArea.setAttribute('readonly', 'readonly')
      document.body.appendChild(textArea)
      // @ts-ignore
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      resolve(true)
    })
  }
}
