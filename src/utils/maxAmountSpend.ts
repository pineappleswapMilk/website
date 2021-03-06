import { CurrencyAmount, JSBI } from '@pancakeswap/sdk'
import { ETHER } from 'components/SearchModal/ETHER'
import { MIN_ADA } from '../config/constants'


/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(currencyAmount?: CurrencyAmount): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  if (currencyAmount.currency === ETHER) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_ADA)) {
      return CurrencyAmount.ether(JSBI.subtract(currencyAmount.raw, MIN_ADA))
    }
    return CurrencyAmount.ether(JSBI.BigInt(0))
  }
  return currencyAmount
}

export default maxAmountSpend
