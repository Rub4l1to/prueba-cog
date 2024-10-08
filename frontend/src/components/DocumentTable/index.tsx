import { FC } from "react";
import type { File } from "../../types";

interface DocumentTableProps {
  files: File[];
  onDownload?: (id: string) => void;
}

const DocumentTable: FC<DocumentTableProps> = ({ files, onDownload }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre del Archivo</th>
            <th>Nombre Original</th>
            <th>Tamaño (KB)</th>
            <th>Tipo de Archivo</th>
            <th>Fecha de Subida</th>
            {onDownload && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {files.map((doc) => (
            <tr key={doc._id}>
              <td>{doc.fileName}</td>
              <td>{doc.originalName}</td>
              <td>{doc.fileSize}</td>
              <td>{doc.fileType}</td>
              <td>{new Date(doc.uploadDate).toLocaleDateString()}</td>
              {onDownload && (
                <td>
                  <button onClick={() => onDownload(doc._id)}>Descargar</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentTable;
