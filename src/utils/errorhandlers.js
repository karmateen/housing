exports.catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
  
  exports.globalErrorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  };