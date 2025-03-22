/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-11-28 11:34:51
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 22:22:40
 * @Description : 操作 cookie
 */
import { isArray, isBoolean, isFunction, isNullish, isNumber, isObject } from '../type';

/**
 * @group 浏览器
 * @description 设置 cookie
 * @param name cookie 名字
 * @param value cookie 值
 * @param expiresInDay 过期时间 天
 * @returns
 */
export function setCookie(name: string, value: string | object | Array<any> | boolean = '', expiresInDay: number = 30) {
  if (!name) return false;
  if (!isNumber(expiresInDay)) expiresInDay = 30;
  const milliseconds_one_day = 24 * 60 * 60 * 1000
  const date = new Date();
  date.setTime(date.getTime() + expiresInDay * milliseconds_one_day);
  if (isFunction(value) || isNullish(value)) return false;
  if (isArray(value) || isObject(value) || isBoolean(value)) {
    value = JSON.stringify(value);
  }
  value = encodeURIComponent(value as string);
  // write the cookie
  document.cookie = `${encodeURIComponent(name)}=${value}; expires=${date.toUTCString()}`;
  return true;
}


/**
 * @group 浏览器
 * @description 查询 cookie
 * @param name cookie 名字
 * @returns
 */
export function getCookie(name: string): string {
  if (!name) return '';
  if (!document.cookie) return '';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [key, value] = cookie.split('=');
    if (key === name) {
      try {
        const val = JSON.parse(decodeURIComponent(value));
        return val;
      } catch (error) {
        // maybe set cookie by other way like document.cookie = 'name=cookie'
        return value;
      }
    }
  }
  return '';
}


/**
 * @group 浏览器
 * @description 移除 cookie
 * @param name cookie 名字
 * @returns
 */
export function removeCookie(name: string) {
  setCookie(name, '', -1);
  return true;
}

/**
 * @group 浏览器
 * @description 移除所有 cookie
 * @returns
 */
export function clearAllCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [key] = cookie.split('=');
    removeCookie(key);
  }
  return true;
}
