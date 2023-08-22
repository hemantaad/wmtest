const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const crypto = require("crypto");

mongoose.connect("mongodb://localhost/wmtest_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const port = 3000;

// Configure session middleware
const secretKey = crypto.randomBytes(64).toString("hex");
console.log("Generated Secret Key:", secretKey);
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
