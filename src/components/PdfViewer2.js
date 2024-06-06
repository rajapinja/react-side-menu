import React from 'react';
import { Document, Page } from 'react-pdf';

function PdfViewer2() {
  const pdfUrl = '/pdfs/ICICIBANK_PERSONAL_LOAN_EMI32213_DBA1500000.pdf'; // Replace with the path to your PDF file

  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} width={300} />
      </Document>
    </div>
  );
}

export default PdfViewer2;
