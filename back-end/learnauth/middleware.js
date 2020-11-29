const { users } = require("./data");

function setUser(req, res, next) {
  if (req.body.userId) {
    req.user = users.find((user) => user.userId === req.body.userId);
  } else {
    req.user = null;
  }
  next();
}

module.exports = { setUser };
