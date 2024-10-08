const File = require("../models/File");
const path = require("path");
const { upload } = require("../utils/handleFIle");

//* Subir archivos
const uploadFile = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "No se subió ningún archivo" });
    }

    const newMetadata = new File({
      fileName: file.filename,
      fileSize: file.size,
      fileType: file.mimetype,
      originalName: file.originalname,
    });

    newMetadata
      .save()
      .then((metadata) =>
        res.status(200).json({
          message: "Archivo subido exitosamente",
          metadata,
        })
      )
      .catch((err) =>
        res.status(500).json({ error: "Error al guardar los metadatos" })
      );
  });
};

//* Consultar metadatos de los archivos
const getFileMetadata = async (req, res) => {
  const { fileName, fileSize } = req.query;

  let query = {};
  if (fileName) query.fileName = { $regex: fileName, $options: "i" };
  if (fileSize) query.fileSize = { $lte: parseInt(fileSize) };

  try {
    const files = await File.find(query);

    if (files.length === 0) {
      return res.status(404).json({
        message: "No se encontraron archivos con los criterios proporcionados.",
      });
    }

    res.status(200).json(files);
  } catch (err) {
    res.status(500).json({ error: "Error al consultar metadatos" });
  }
};

//* Descargar archivos
const downloadFile = async (req, res) => {
  const { id } = req.params;

  try {
    const fileMetadata = await File.findById(id);

    if (!fileMetadata) {
      return res.status(404).json({ error: "Archivo no encontrado" });
    }

    const filePath = path.join(__dirname, "../uploads", fileMetadata.fileName);

    return res.download(filePath, fileMetadata.originalName, (err) => {
      if (err) {
        return res.status(500).json({ error: "Error al descargar el archivo" });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { uploadFile, getFileMetadata, downloadFile };
