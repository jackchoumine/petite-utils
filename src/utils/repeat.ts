/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-10-28 01:04:56
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-10-28 16:43:36
 * @Description : repeatRun 函数 - 重复执行函数
 * 解决 setInterval 时间不精确的问题
 */
import { isFunction, isNumber } from '../type/type'

/**
 * @description: stop run repeat-function
 */
export type StopRepeat = () => void

export type RepeatFn = (
  stop: StopRepeat,
  repeatTimes: number,
  params?: unknown,
) => StopRepeat

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
 * repeat((stop, repeatTimes) => {
 *  console.log(repeatTimes)
 * if (repeatTimes === 5) {
 *    stop() // stop function from fn params
 *  }
 * })
 * ```
 * @example
 * ### pass a function definition to repeat and stop it by repeat return value
 * ```ts
 * let stop = repeat(sayHi, { interval: 1000 })
 * function sayHi(_, repeatTimes) {
 *  console.log(repeatTimes)
 *  if (repeatTimes === 5) {
 *   stop() // stop from repeat return value
 *  }
 * }
 * ```
 */
export function repeatRun(
  fn: RepeatFn,
  { interval = 1000, immediate = false }: RepeatOptions = {},
  params,
) {
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
    fn(stop, repeatTimes, params)
  }
  let timer = setTimeout(function repeatMe() {
    if (hasStopped) {
      return
    }
    ++repeatTimes
    fn(stop, repeatTimes, params)
    timer2 = setTimeout(repeatMe, interval)
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
