const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://test:test@cluster0-ytjxv.mongodb.net/test?retryWrites=true&w=majority";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify:false }).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/movies");