const CardsItem = require("../../models/cardsModel");
var multer = require("multer");
let lodash = require("lodash");
var storage = multer.diskStorage({
  destination: "./EcomWithBackEnd/picUploader/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
exports.uploadpic = multer({ storage: storage });
exports.createCardItem = (req, res) => {
  console.log(req.file);
  console.log(req.body);
  let { price } = req.body;
  let { Pname } = req.body;
  let { counter } = req.body;
  let { path } = req.file;
  let { description } = req.body;
  let item = new CardsItem({
    price,
    Pname,
    counter,
    description,
    file: path.slice(15),
  });
  item.save((err, data) => {
    if (err) {
      return res.json({ error: err });
    } else {
      res.json(data);
    }
  });
};
exports.getCartItem = (req, res) => {
  CardsItem.find({}, (err, data) => {
    if (err) {
      return res.json({ error: err });
    } else {
      res.json(data);
      // console.log(data)
    }
  });
};
exports.createCardsDataIdForFetching = (req, res, next, id) => {
  CardsItem.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.json({ error: err });
    }
    req.cardsData = data;
    next();
  });
};
exports.fetch_singleObjData = (req, res) => {
  return res.json(req.cardsData);
};
exports.updateCardsData = (req, res) => {
  console.log(req.body);
  console.log(req.file.path);
  const { path } = req.file;
  let data = req.cardsData;
  data = lodash.extend(data, req.body, { file: path.slice(15) });
  data.save((err, data) => {
    err ? res.json({ error: err }) : res.json({data,message:"data updated successfully"});
  });
};
exports.deleteCardsData = (req, res) => {
  let dataObj = req.cardsData;
  dataObj.remove((err, data) => {
    if (err) {
      return res.json({ error: err });
    } else {
      res.json({ message: "data deleted successfully" });
    }
  });
};
