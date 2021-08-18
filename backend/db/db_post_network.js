const mongoose = require("mongoose");

const dbConnectionPostNet = async () => {
  try {
    await mongoose.connect(process.env.DB_POST_NETWORK_CONNECTION, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: ON");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", e);
    throw new Error("Error connecting to MongoDB");
  }
};

module.exports = { dbConnectionPostNet };
