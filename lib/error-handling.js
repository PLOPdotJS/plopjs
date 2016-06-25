//I don't see this file being used anywhere, if that's the case I'd just take it out
module.exports = exports = function(err, req, res, next) {
  res.status(500).json({ msg: err.message });
  next();
};
