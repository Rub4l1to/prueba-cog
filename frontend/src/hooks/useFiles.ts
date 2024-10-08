import { useState, useEffect } from "react";
import axios from "axios";

const useFiles = () => {
  const [documents, setDocuments] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSize, setFilterSize] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/metadata`
        );
        setDocuments(response.data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

  const filteredDocuments = documents.filter(
    (doc: { fileName: string; fileSize: number }) => {
      return (
        (filterName ? doc.fileName.includes(filterName) : true) &&
        (filterSize ? doc.fileSize <= parseInt(filterSize) : true)
      );
    }
  );

  return {
    files: filteredDocuments,
    setFilterName,
    setFilterSize,
  };
};

export default useFiles;
