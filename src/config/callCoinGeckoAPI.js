const axios = require('axios');

export default async function callCoinGeckoAPI(endpoint, params = {}) {
  const queryString = `${Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`;

  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.URL_COINGECKO}/${endpoint}?${queryString}`,
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': process.env.API_KEY_COINGECKO,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao chamar a API da Binance: ${error.message}`);
  }
}
