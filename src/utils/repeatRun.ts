/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-10-28 01:04:56
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 20:38:13
 * @Description : repeatRun 函数 - 重复执行函数
 * 解决 setInterval 时间不精确的问题
 */
import { isFunction, isNumber } from '../type/type'

/**
 * @description: stop run repeat-function
 */
export type StopRepeat = () => void

export type RepeatFn = (
  repeatTimes: number,
  stop: StopRepeat,
  params?: unknown,
) => void

export interface RepeatOptions {
  interval?: number
  immediate?: boolean
}

/**
 * ## repeat call function
 * @param fn will be called repeatly
 * @param param1.interval interval time default 1000
 * @param param1.immediate call fn immediately default false
 * @param params params pass to fn
 * @returns stopFunction to stop repeat
 * @example
 * ### pass a arrow function to repeat
 * ```ts
 * repeatRun((repeatTimes, stop) => {
 *  console.log(repeatTimes)
 * if (repeatTimes === 5) {
 *    stop() // stop function from fn params
 *  }
 * })
 * ```
 * @example
 * ### pass a function definition to repeat and stop it by repeat return value
 * ```ts
 * let stop = repeatRun(sayHi, { interval: 1000 })
 * function sayHi(repeatTimes) {
 *  console.log(repeatTimes)
 *  if (repeatTimes === 5) {
 *   stop() // stop from repeatRun return value
 *  }
 * }
 * ```
 */
export function repeatRun(
  fn: RepeatFn,
  { interval = 1000, immediate = false }: RepeatOptions = {},
  params?: unknown,
): StopRepeat {
  if (!isFunction(fn)) {
    throw new Error('first argument must be a function')
  }

  if (!isNumber(interval) || interval <= 0) {
    throw new Error('interval must be a positive number')
  }
  const stop: StopRepeat = () => {
    hasStopped = true
    clearTimeout(timer)
    clearTimeout(timer2)
  }
  let hasStopped = false
  let timer2
  let repeatTimes = 0
  if (immediate) {
    ++repeatTimes
    fn(repeatTimes, stop, params)
  }
  let timer = setTimeout(function repeat() {
    if (hasStopped) {
      return
    }
    ++repeatTimes
    fn(repeatTimes, stop, params)
    timer2 = setTimeout(repeat, interval)
  }, interval)
  return stop
}

// 函数定义和函数表达式的区别
// 函数定义会被提升，var 的函数表达式不会被提升，let const 的函数表达式不会被提升
// let stop = repeat(hello)
// // this is ok, because function definition is hoisted
// function hello(_, times) {
//   console.log('hello', times)
//   if (times === 10) {
//     stop()
//   }
// }
// // this is not ok, because var initialization is hoisted  ❌
// var hello = function (_, time) {
//   console.log('hello', times)
//   if (times === 10) {
//     stop()
//   }
// }
//  // this is not ok, because let and const variable are not hoisted ❌
// let hello = (_, time) => {
//   console.log('hello', times)
//   if (times === 10) {
//     stop()
//   }
// }
