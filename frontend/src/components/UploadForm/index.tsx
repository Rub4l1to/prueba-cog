import { ChangeEvent, useState } from "react";
import { useUpload } from "../../hooks";

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const { uploadFile, uploadStatus } = useUpload();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Por favor selecciona un archivo");
      return;
    }

    uploadFile(file);
  };

  return (
    <div>
      <h2>Subir Documento</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default UploadForm;
