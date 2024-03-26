import axios from 'axios';

const { Spot } = require('@binance/connector');

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
const baseURL = process.env.BASE_URL;

// Para teste fictício:
const client = new Spot(apiKey, apiSecret, { baseURL });

export const apiBinance = axios.create({ baseURL });

// // Get account information
// client.account().then(response => client.logger.log(response.data))

// // Place a new order
// client.newOrder('BNBUSDT', 'BUY', 'LIMIT', {
//   price: '350',
//   quantity: 1,
//   timeInForce: 'GTC'
// }).then(response => client.logger.log(response.data))
//   .catch(error => client.logger.error(error))

// Para mais informações: https://github.com/binance/binance-connector-node

export default client;
