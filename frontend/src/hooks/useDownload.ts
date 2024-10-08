const useDownload = () => {
  const downloadFile = (id: string) => {
    window.location.href = `${import.meta.env.VITE_API_URL}/download/${id}`;
  };

  return { downloadFile };
};

export default useDownload;
