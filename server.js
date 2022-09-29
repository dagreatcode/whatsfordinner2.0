require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const PORT2 = process.env.PORT2 || 4001;
const PORT3 = process.env.PORT2 || 5001;
// const db = require("../data");
// const apiRoutes = require("./controllers/index");
// const db = require("./models")
// app.use("/api", apiRoutes);
const mongoose = require("mongoose");
const products = require("./data/AllProducts");
// const { default: connectDatabase } = require("./config/MongoDB");
const routes = require("./routes");
// // All Routes
app.use(routes);
// (For Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connectDatabase();
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

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
app.get("/apiFun", (req, res) => {
  res.send("API FUN");
  var adminUser = req.params.apiFun;
  console.log(adminUser);
  res.end();
});

// app.get("/api/all", (req, res) => {
//   db.user.find({})
//     // .populate("user")
//     .then((foundUsers) => {
//       res.json(foundUsers);
//     });
// });

// app.post("/", (req, res) => {
//   db.User.create(req.body).then((newUser) => {
//     res.json(newUser);
//   });
// });

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// For the Database
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port: ${PORT} http://localhost:${PORT}`);
});

// For Conversation and socket.io
app.listen(PORT2, function () {
  console.log(`🌎 ==> API server now on port: ${PORT2} http://localhost:${PORT2}`);
});

// For the Dashboard
app.listen(PORT3, function () {
  console.log(`🌎 ==> API server now on port: ${PORT3} http://localhost:${PORT3}`);
});