const mongoose = require("mongoose");

require("dotenv").config();
const DBconnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("Error connecting to the database", err);
      process.exit(1);
    });
};

module.exports = DBconnect;
