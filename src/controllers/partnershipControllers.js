const Partnership = require('../models/partnershipModel.js');

async function createPartnership(req, res, next) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      residentialAddress,
      rentalHouseAddress,
      houseDetail,
      description,
      rentalPermit,
      identificationCard,
      homeAddressVerification
    } = req.body;

    const existingPartnership = await Partnership.findOne({ email });
    if (existingPartnership) {
      return res.status(400).json({ message: 'Partnership already exists' });
    }


    const partnership = await Partnership.create({
      firstName,
      lastName,
      email,
      password,
      residentialAddress,
      rentalHouseAddress,
      houseDetail,
      description,
      rentalPermit,
      identificationCard,
      homeAddressVerification
    });

    res.status(201).json(partnership);
  } catch (error) {
    next(error);
  }
};

async function uploadDocument(req, res, next) {
  try {
   const filePath = req.file.path;
    res.status(200).json({ filePath });
  } catch (error) {
    next(error);
  };
};

async function verifyPartnership(req, res, next) {
  try {
    const { partnershipId } = req.params;

    const partnership = await Partnership.findById(partnershipId);
    if (!partnership) {
      return res.status(404).json({ message: 'Partnership not found' });
    };

    partnership.verified = true;
    await partnership.save();

    res.status(200).json({ message: 'Partnership verified successfully' });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  createPartnership,
  uploadDocument,
  verifyPartnership
};
