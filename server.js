require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const PORT2 = process.env.PORT2 || 4001;
const PORT3 = process.env.PORT2 || 5001;
const db = require("./models");
const connectDatabase = require("./config/MongoDB.js");
// const apiRoutes = require("./controllers/index");

//FIXME: Clear out the server into other files

// app.use("/api", apiRoutes);
// const products = require("./data/AllProducts");
// const { default: connectDatabase } = require("./config/MongoDB");
// const routes = require("./routes");

// app.use(routes);

// (For Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDatabase();

// // All API Routes 
//TODO: Add these to another js file
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});
app.get("/apiFun", (req, res) => {
  res.send("API FUN");
  var adminUser = req.params.apiFun;
  console.log(adminUser);
  res.end();
});
app.get("/api/all-products", async (req, res) => {
  try {
    const findProd = await db.Product.find({});
    res.json(findProd);
  } catch (err) {
    console.log(err.message);
  }
});
app.get("/api/all-products/:id", async (req, res) => {
  try {
    const product = await products.find((p) => p._id === req.params.id);
    res.json(product);
  } catch (err) {
    console.log(err.message);
  }
});
app.get("/api/allBooks", async (req, res) => {
  try {
    const findBook = await db.Product.find({});
    res.json(findBook);
  } catch (err) {
    console.log(err.message);
  }
});
app.get("/api/allBooks/:id", async (req, res) => {
  try {
    const book = await books.find((p) => p._id === req.params.id);
    res.json(book);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// For the Database
app.listen(PORT, function () {
  console.log(
    `🌎 ==> API server now on port: ${PORT} http://localhost:${PORT}`
  );
});
// For Conversation and socket.io
app.listen(PORT2, function () {
  console.log(
    `🎯 ==> API server now on port: ${PORT2} http://localhost:${PORT2}`
  );
});
// For the Dashboard
app.listen(PORT3, function () {
  console.log(
    `🫀  ==> API server now on port: ${PORT3} http://localhost:${PORT3}`
  );
});
