const { ROLE } = require("./data");

function checkLogin(req, res, next) {
  if (!req.user) {
    res.status(401).send("You need login!");
  } else {
    next();
  }
}

function checkAdmin(req, res, next) {
  if (req.user.userRole !== ROLE.ADMIN) {
    res.status(403).send("Admin only!");
  } else {
    next();
  }
}

module.exports = { checkLogin, checkAdmin };
