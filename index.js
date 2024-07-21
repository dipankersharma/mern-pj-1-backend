const express = require("express");
const cors = require("cors");
const app = express();

// load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// routes
const postroute = require("./Routes/route");
app.use("/api/v1", postroute);

// server connection
app.listen(PORT, () => {
  console.log(`listening on port ${PORT} ...`);
});

const DBconnect = require("./config/Database");
DBconnect();

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the blog API</h1>`);
});
