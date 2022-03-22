const req = require("express/lib/request");
const Sundae = require("../models/sundae.model");
// const Sundae = require("models/sundae.model");

module.exports.eric = (req, res) => {
  res.json({ message: "you're here eric" });
};
module.exports.testResponse = (req, res) => {
  res.json({ message: "test response eric" });
};

module.exports.findAll = (req, res) => {
  Sundae.find({})
    .then((results) => res.json(results))
    .catch((err) => res.status(400).json({ message: "that didn't work", err }));
};

module.exports.createSundae = (req, res) => {
  Sundae.create(req.body)
    .then((newSundae) => res.json(newSundae))
    .catch((err) =>
      res.status(400).json({ message: "create didn't work", err })
    );
};

module.exports.findOne = (req, res) => {
  Sundae.findOne({ _id: req.params._id })
    .then((results) => res.json(results))
    .catch((err) => res.status(400).json({ message: "that didn't work", err }));
};
module.exports.deleteOne = (req, res) => {
  Sundae.deleteOne({ _id: req.params._id })
    .then((results) => res.json(results))
    .catch((err) => res.status(400).json({ message: "that didn't work", err }));
};

module.exports.updateOne = (req, res) => {
  Sundae.updateOne({ _id: req.params._id }, req.body)
    .then((results) => res.json(results))
    .catch((err) => res.status(400).json({ message: "that didn't work", err }));
};

module.exports.addTopping = (req,res) => {
  Sundae.updateOne({_id: req.params._id},
    {$push: {toppings: req.body.topping}})
    .then((results) => res.json(results))
    .catch((err) => res.status(400).json({ message: "that didn't work", err }));
}