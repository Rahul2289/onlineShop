const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const cors = require("cors");
const app = express();
const productsRouter = require("./routes/products.js");
const authRouter = require("./routes/auth.js");
const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api", productsRouter);
app.use("/api", authRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT} and DB connected`);
  });
});
