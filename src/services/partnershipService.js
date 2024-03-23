const Partnership = require('../models/Partnership');

async function createPartnership(partnershipData) {
  try {
    const partnership = await Partnership.create(partnershipData);
    return partnership;
  } catch (error) {
    throw new Error('Could not create partnership');
  }
}
