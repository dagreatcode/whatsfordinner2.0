const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost/whatsForDinner_db",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // onAfterSetupMiddleware: true,
        // onBeforeSetupMiddleware: true,
      }
    );
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongoose successfully connected.");
    });

    connection.on("error", (err) => {
      console.log("Mongoose connection error: ", err);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;

