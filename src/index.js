const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/product.js");
const productRoute = require("./routes/productRoute.js");
const app = express();
// const port = 3000;

dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongodb connect
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected!");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  });


// routes
app.use("/api/products", productRoute);

// endpoint test
app.get("/", (req, res) => {
  res.send("Hello World!");
});


