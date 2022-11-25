const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
let users = [];
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.get("user", (req, res) => {
  res.send(users);
});
app.post("user", (req, res) => {
  const { body } = req;
  users.push(body);
  res.send("success").status(201);
});
app.listen(port, () => {
  console.log(`server ${port} start...`);
});
