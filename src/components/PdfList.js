// PdfList.js
import React, { useState } from 'react';

function PdfList({ pdfFiles, onPdfSelected }) {
  const [selectedPdf, setSelectedPdf] = useState('');

  const handlePdfChange = (e) => {
    const selectedPdf = e.target.value;
    setSelectedPdf(selectedPdf);
    onPdfSelected(selectedPdf);
  };

  return (
    <div>
      <select value={selectedPdf} onChange={handlePdfChange}>
        <option value="">Select a PDF</option>
        {pdfFiles.map((pdfFile, index) => (
          <option key={index} value={pdfFile}>
            {pdfFile}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PdfList;
