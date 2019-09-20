const post = ({ Game }, { config }) => async (req, res, next) => {
  const { moves, status, message } = req.body;
  try {
    let game = new Game({
      moves,
      ipAddress: req.clientIp,
      status,
      message
    });

    await game.save();
    res.status(200).send({ message: 'Game saved'});
  } catch (err) {
    next(err);
  }
};

module.exports = { post };