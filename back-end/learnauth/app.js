const express = require("express");
const app = express();
app.use(express.json());

const { setUser } = require("./middleware");
app.use(setUser);

const { checkLogin, checkAdmin } = require("./permission");

app.get("/homepage", (req, res) => {
  res.send("Home page");
});

app.get("/dashboard", checkLogin, (req, res) => {
  res.send("Dashboard");
});

app.get("/admin", checkLogin, checkAdmin, (req, res) => {
  res.send("Admin");
});

app.listen(3002, () => {
  console.log("app run at port 3002!");
});
