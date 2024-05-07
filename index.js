const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", function (req, res) {
  res.send("Hello From Node API");
});

mongoose
  .connect(
    "mongodb+srv://yawsnr:mQgJvWEwywykhQiL@backenddb.lvtoukk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to DB!");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  });
