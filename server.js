const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
// const mongoose = require("mongoose");

// (For Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose.connect(
// 	process.env.MONGODB_URI || "mongodb://localhost/whatsForDinner_db",
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		// useCreateIndex: true,
// 		// useFindAndModify: false,
// 		// onAfterSetupMiddleware: true,
// 		// onBeforeSetupMiddleware: true,
// 	}
// );

// const connection = mongoose.connection;

// connection.on("connected", () => {
// 	console.log("Mongoose successfully connected.");
// });

// connection.on("error", (err) => {
// 	console.log("Mongoose connection error: ", err);
// });

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

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
