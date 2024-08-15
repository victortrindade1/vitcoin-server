import getAccount from '../services/getAccount';

class BinanceAccountInfoController {
  async index(req, res) {
    try {
      const response = await getAccount();

      console.log('teste');

      return res.json(response);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default new BinanceAccountInfoController();
