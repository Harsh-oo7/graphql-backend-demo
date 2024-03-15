const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");

const DBConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (err) {
    console.log(err);
    return;
  }

  console.log("Connected To MongoDB...");
};

module.exports = {
    DBConnection
} 