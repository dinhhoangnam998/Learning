const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require("../db");
const { userSchema } = require("../validation");

function authToken(req, res, next) {
  const token = req.header("autho-token");
  if (!token) return res.status(401).send("Acess Denied");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
  } catch (err) {
    res.status(400).send("Invalid token");
  }
}

router.post("/register", async (req, res) => {
  try {
    const col = (await connection).db("LearnAuth").collection("User");
    const { error, value } = userSchema.validate(req.body);
    if (error) {
      res.status(400).json(error);
    }

    const emailExist = await col.findOne({ email: req.body.email });
    if (emailExist) {
      res.status(400).send("Email already exists!");
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const result = await col.insertOne(req.body);
    res.json(result.insertedId);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const col = (await connection).db("LearnAuth").collection("User");

  const { error, value } = userSchema.validate(req.body);
  if (error) {
    res.status(400).json(error);
  }

  const user = await col.findOne({ email: req.body.email });
  if (!user) {
    res.status(400).send("Email is not exists!");
  }

  if (!bcrypt.compareSync(req.body.password, user.password)) {
    res.status(400).send("Invalid password");
  }
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
