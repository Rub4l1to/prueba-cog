const express = require("express");
const router = express.Router();
const {
  uploadFile,
  getFileMetadata,
  downloadFile,
} = require("../controllers/fileController");

router.get("/metadata", getFileMetadata);
router.get("/download/:id", downloadFile);
router.post("/upload", uploadFile);

module.exports = router;
