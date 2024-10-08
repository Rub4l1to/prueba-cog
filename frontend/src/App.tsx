import FileDownload from "./components/FileDownload";
import DocumentList from "./components/FileList";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div>
      <UploadForm />
      <DocumentList />
      <FileDownload />
    </div>
  );
}

export default App;
