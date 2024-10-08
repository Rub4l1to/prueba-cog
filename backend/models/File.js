const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileSize: { type: Number, required: true },
  fileType: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  originalName: { type: String },
});

module.exports = mongoose.model("File", fileSchema);
