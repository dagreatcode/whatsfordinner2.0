const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Products collection and inserts the Products below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/whatsForDinner_db"
);

const productSeed = [
  {
    name: "Let's cook for All",
    image: "./images",
    description: "Just cook better food",
    rating: 5,
    numReviews: 9,
    price: 100,
    countInStock: 500,
  },
  {
    name: "What not to eat in 2022",
    image: "./images",
    description: "Best Product around to date",
    rating: 3,
    numReviews: 2,
    price: 120,
    countInStock: 10,
  },
  {
    name: "How to Cook better!!",
    image: "./images",
    description: "Best Product around",
    rating: 5,
    numReviews: 4,
    price: 180,
    countInStock: 100,
  },
  {
    name: "Save Money Cooking",
    image: "./images",
    description: "Just Check it Out!!",
    rating: 3,
    numReviews: 17,
    price: 80,
    countInStock: 90,
  },
];

db.Product.deleteOne({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
