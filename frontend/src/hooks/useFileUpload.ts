import { useState } from "react";
import axios from "axios";

const useFileUpload = () => {
  const [uploadStatus, setUploadStatus] = useState("");

  const uploadFile = async (file: string | Blob) => {
    if (!file) {
      alert("Por favor selecciona un archivo");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploadStatus("Archivo subido exitosamente");
    } catch {
      setUploadStatus("Error al subir el archivo");
    }
  };

  return { uploadFile, uploadStatus };
};

export default useFileUpload;
