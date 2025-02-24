export const downloadFile = (file, type, filename) => {
  const data = new Blob([file], { type });
  const csvURL = window.URL.createObjectURL(data);
  const tempLink = document.createElement('a');
  tempLink.href = csvURL;
  tempLink.setAttribute('download', filename);
  tempLink.click();
};

export const downloadCsv = (csvFile: string, fileName: string) => {
  downloadFile(csvFile, 'text/csv', `${fileName || 'file'}_${Date.now()}.xlsx`);
};
