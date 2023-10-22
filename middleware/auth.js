const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // on récupère le token dans le header
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); // on le décode
    User.findById(decodedToken.userId) // on cherche l'utilisateur dans la base de données
    .then(() => {
      next();
    }).catch((error) => {
      res.status(401).send({
        error: "Invalid request!"
      });
    });
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
}
