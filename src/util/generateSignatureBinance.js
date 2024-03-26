const crypto = require('crypto');

// Função para gerar uma assinatura HMAC-SHA256
export default function generateSignature(queryString) {
  return crypto
    .createHmac('sha256', process.env.API_SECRET)
    .update(queryString)
    .digest('hex');
}
