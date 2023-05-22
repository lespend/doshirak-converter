import axios from "axios";

export default class CurrencyService {
    static async getCurrencyMap() {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=btc%2Cusd%2Crub&precision=10`);
        const bitcoinToDoshirakRate = Number((response.data.bitcoin.rub / 85).toFixed(10));
        return {...response.data.bitcoin, doshirak: bitcoinToDoshirakRate};
    }
}