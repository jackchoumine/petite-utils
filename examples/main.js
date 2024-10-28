/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-28 10:20:30
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-10-28 16:36:50
 * @Description : 测试 esm
 */
import { repeat } from 'petite-utils'

repeat((stop, repeatTimes) => {
  console.log('repeatTimes:', repeatTimes)
  if (repeatTimes > 5) {
    stop()
  }
})
