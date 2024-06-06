// App.js
import React from 'react';
import PdfViewer from './PDFViewer_Older';


function PdfLink() {
   

  return (
    <div>
      <h1>PDF Viewer App</h1>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        Open PDF in a New Tab
      </a>
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
}

export default PdfLink;
