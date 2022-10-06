const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Products collection and inserts the Products below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/whatsForDinner_db"
);

const productSeed = [
  {
    name: "Let's cook for the future",
    image: "./images",
    description: "Best health with cooking better foods",
    rating: 5,
    numReviews: 7,
    price: 140,
    countInStock: 100,
  },
  {
    name: "What not to eat in 2022",
    image: "./images",
    description: "Best Product around to date",
    price: 120,
    countInStock: 100,
    rating: 3,
    numReviews: 2,
  },
  {
    name: "How to Cook better!!",
    image: "./images",
    description: "Best Product around",
    price: 180,
    countInStock: 100,
    rating: 5,
    numReviews: 4,
  },
  {
    name: "Save Money Cooking",
    image: "./images",
    description: "Just Check it Out!!",
    price: 80,
    countInStock: 90,
    rating: 3,
    numReviews: 17,
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
