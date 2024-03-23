const Message = require('../models/messageModels.js');

async function createMessage(messageData) {
  try {
    const message = await Message.create(messageData);
    return message;
  } catch (error) {
    throw new Error('Could not create message');
  }
}

module.exports = {
  createMessage
};
