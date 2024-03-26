const axios = require('axios');

import generateSignature from '../../util/generateSignatureBinance';

// Função para fazer uma solicitação à API da Binance
export default async function callBinanceAPI(endpoint, params = {}) {
  const timestamp = Date.now();
  const queryString = `timestamp=${timestamp}&${Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`;
  const signature = generateSignature(queryString);

  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.BASE_URL}/api/v3/${endpoint}?${queryString}&signature=${signature}`,
      headers: {
        'X-MBX-APIKEY': apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao chamar a API da Binance: ${error.message}`);
  }
}
