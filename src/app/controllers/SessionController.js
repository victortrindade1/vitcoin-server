import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    try {
      const { password } = req.body;

      const user = { password };

      if (user.password !== process.env.PASS) {
        throw new Error('Password does not match');
      }

      user.name = process.env.NAME;

      const { name } = user;

      console.log('Session Logged');

      return res.json({
        user: {
          name,
          token: jwt.sign({ id: name }, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
          }),
        },
      });
    } catch (e) {
      return res.status(400).json(e.message);
    }
  }
}

export default new SessionController();
