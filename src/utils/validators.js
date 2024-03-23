const { body, validationResult } = require('express-validator');

exports.validateUser = [
  body('name').isString().notEmpty(),
  body('email').isEmail().notEmpty(),
  body('password').isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateProperty = [
  body('address').isString().notEmpty(),
  body('price').isNumeric().notEmpty(),
  body('bedrooms').isNumeric().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
