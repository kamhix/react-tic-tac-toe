const list = ({ Game }, {config}) => (req, res, next) => {
  Game.find({ ipAddress: req.clientIp })
    .sort('-createdAt')
    .exec((err, games) => {
      if (err) {
        return next(err);
      }
      res.status(200).send({games});
    });
};

module.exports = { list };