const messageServices = require('../services/messageServices.js');

async function createMessage(req, res, next) {
  try {
    const message = await messageServices.createMessage(req.body);
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMessage
};
