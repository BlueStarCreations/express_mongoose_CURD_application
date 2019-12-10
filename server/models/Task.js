const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    // _id: String,
    num: Number,
    title: String,
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  },
  { timestamp: true, collection: "tasks" }
);

mongoose.model("Task", taskSchema);
