import callBinanceAPI from '../../config/callBinanceAPI';

const getAccount = async () => {
  try {
    const response = await callBinanceAPI('account', {
      // omitZeroBalances: true,
    });

    return response;
  } catch (error) {
    throw new Error(`Erro ao chamar getAccount: ${error.message}`);
  }
};

export default getAccount;
