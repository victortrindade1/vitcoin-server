import serverStart from '../services/serverStart';

// Variável pra verificar se server está rodando ou parada
let intervaloId = null;

class ServerController {
  async verifyStatus(req, res) {
    try {
      const statusServer = intervaloId ? true : false;

      return res.json({
        statusServer,
      });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async start(req, res) {
    try {
      const { interval = 600 } = req.query;

      if (!intervaloId) {
        intervaloId = setInterval(() => serverStart(interval), interval * 1000);
      }

      return res.json({
        message: `Servidor rodando no intervalo de ${interval} segundos.`,
      });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async stop(req, res) {
    try {
      if (intervaloId) {
        clearInterval(intervaloId);
        intervaloId = null;
      }
      return res.json({ message: 'Server stoped succesfully' });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default new ServerController();
