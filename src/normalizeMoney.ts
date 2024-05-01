import { isNumber, isString } from './type'

export function normalizeMoney(money: number | string): string {
  if ((!isNumber(money) && !isString(money)) || money === '') {
    return '0'
  }

  money = money.toString()
  if (/[^0-9\.]/.test(money)) return '0'

  if (+money === 0) return '0.00'

  money = money.replace(/^(\d*)$/, '$1.')
  money = (money + '00').replace(/(\d*\.\d\d)\d*/, '$1')
  money = money.replace('.', ',')

  const re = /(\d)(\d{3},)/
  while (re.test(money)) {
    money = money.replace(re, '$1,$2')
  }
  money = money.replace(/,(\d\d)$/, '.$1')
  //   不带小数位(默认是有小数位)
  //   if (precision == 0) {
  //     var a = money.split('.')
  //     if (a[1] == '00') {
  //       money = a[0]
  //     }
  //   }
  return money
}
