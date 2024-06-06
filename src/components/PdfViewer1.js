// PdfViewer.js
import React from 'react';
import { PDFViewer} from '@react-pdf/renderer';



function PdfViewer() {
  //const pdfUrl = '/path-to-existing-pdf-file.pdf'; // Replace with the actual path to your PDF file
  const pdfUrl = 'file:///C://Users//raja_//OneDrive//Desktop//_Docs//_ICICI_BANK_LOAN//ICICIBANK_PERSONAL_LOAN_EMI32213_DBA1500000.pdf';

console.log("PdfUrl : ", pdfUrl);
  return (
    <div>
      <PDFViewer width="100%" height={500}>
      <iframe
        src={pdfUrl}
            title="PDF Viewer"
            width="100%"
            height="500px"
            frameBorder="0"
      ></iframe>
      </PDFViewer>
    </div>
  );
}

export default PdfViewer;
