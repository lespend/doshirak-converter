import { CurrencyMap } from '../types/converter'; 

export const convertValue = (fromValue: number, fromCurrency: string, toCurrency: string, currencyMap: CurrencyMap) => {
    return currencyMap[toCurrency] / currencyMap[fromCurrency] * fromValue;
}

export const generateDefaultConversions = (from: string, to: string, currencyMap: CurrencyMap): number[][] => {
    const result = []
    for (let i = 0; i < 12; i++) {
        const pair = [];
        pair.push(Math.pow(10, i))
        pair.push(convertValue(pair[0], from, to, currencyMap))
        result.push(pair)
    }
    return result
}