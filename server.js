const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
// mongoose
//   .connect("mongodb://localhost:27017/cardsData", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Connected to Database");
//   })
//   .catch((err) => {
//     console.log("Not Connected to Database ERROR! ", err);
//   });
mongoose.connect(
  "mongodb+srv://adeel123:adeel123@devconnector-pdmbx.mongodb.net/EComProductData",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  (err, data) => {
    console.log(err || data);
    console.log("mongodb connected");
  }
);
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
let { createCardItem } = require("./controllers/api/cards");
let { getCartItem } = require("./controllers/api/cards");
let { uploadpic } = require("./controllers/api/cards");
let { createCardsDataIdForFetching } = require("./controllers/api/cards");
let { fetch_singleObjData } = require("./controllers/api/cards");
let { deleteCardsData } = require("./controllers/api/cards");
let { updateCardsData } = require("./controllers/api/cards");
app.post("/createData", uploadpic.single("file"), createCardItem);

app.get("/getCardItem", getCartItem);
app.get("/getCardItem/:cardsItemId", fetch_singleObjData);
app.put(
  "/updateCardsData/:cardsItemId",
  uploadpic.single("file"),
  updateCardsData
);
app.delete("/deleteCardsData/:cardsItemId", deleteCardsData);
app.param("cardsItemId", createCardsDataIdForFetching);

app.use(express.static("./EcomWithBackEnd"));
app.use(express.static("./EcomWithBackEnd"));
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
