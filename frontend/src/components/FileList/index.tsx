import { useFiles } from "../../hooks";
import DocumentTable from "../DocumentTable";

const DocumentList = () => {
  const { files, setFilterName, setFilterSize } = useFiles();

  return (
    <div>
      <h2>Documentos</h2>
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
      <DocumentTable files={files} />
    </div>
  );
};

export default DocumentList;
