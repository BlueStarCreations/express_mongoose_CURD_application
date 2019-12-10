const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
  create: (req, res) => {
    Task.create(req.body)
      .then(data => res.json({ message: "success", data: data }))
      .catch(error => res.json({ message: "fail", err: error }));
  },
  readAll: (req, res) => {
    Task.find()
      .then(data => res.json(data))
      .catch(error => res.json(error));
  },
  readOne: (req, res) => {
    console.log("this is from tasks.js", req.params.id);
    Task.findById({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(error => res.json(error));
  },
  update: (req, res) => {
    Task.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    })
      .then(data => res.json(data))
      .catch(error => res.json(error));
  },
  delete: (req, res) => {
    Task.findByIdAndDelete({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(error => res.json(error));
  }
};
