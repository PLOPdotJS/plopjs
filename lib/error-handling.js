module.exports = exports = function(err, req, res, next) {
  res.status(500).json({ msg: err.message });
  next();
};
