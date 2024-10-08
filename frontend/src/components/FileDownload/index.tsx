import { useFiles, useDownload } from "../../hooks";
import DocumentTable from "../DocumentTable";

const FileDownload = () => {
  const { files, setFilterName, setFilterSize } = useFiles();
  const { downloadFile } = useDownload();

  return (
    <div>
      <h2>Documentos subidos</h2>
      <div>
        <input
          type="text"
          placeholder="Filtrar por nombre"
          onChange={(e) => setFilterName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filtrar por tamaño (KB)"
          onChange={(e) => setFilterSize(e.target.value)}
        />
      </div>
      <DocumentTable files={files} onDownload={downloadFile} />
    </div>
  );
};

export default FileDownload;
