const express = require("express");
const app = express();
require("dotenv").config();
const connection = require("./db");

app.use(express.json());
const authRoute = require("./routes/auth");
app.use("/api/user", authRoute);

app.get("/test", async (req, res) => {
  const col = (await connection).db("LearnAuth").collection("User");
  const result = await col.findOne({ email: "hahaha" });
  console.log(result);
  res.json(result);
});

app.listen(3001, () => console.log("server running at port 3001!"));
