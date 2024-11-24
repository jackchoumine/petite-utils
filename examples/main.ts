/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-28 10:20:30
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-11-25 00:44:08
 * @Description : 测试 esm
 */
import { repeatRun } from 'petite-utils'

repeatRun((repeatTimes, stop) => {
  console.log('repeatTimes:', repeatTimes)
  if (repeatTimes > 5) {
    stop()
  }
})
