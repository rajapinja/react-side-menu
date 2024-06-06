// PdfList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPDF from '@react-pdf/renderer';

const BASE_URL = 'http://localhost:3001'

function FetchPdfList({ onPdfSelected }) {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    const fetchPdfFiles = async () => {
        try {
            const headers = {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            };         
            const response = await fetch(`${BASE_URL}/api/pdfs`, { headers });     
            if (response.ok) {
              console.log('Inside response.ok')
              const pdfFiles = await response.json();
              setPdfFiles(pdfFiles);
              console.log("PDF files:", pdfFiles);
            } else {
              console.error('Failed to fetch PDF files:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching PDF files:', error);
          }
    };

    fetchPdfFiles();
  }, []);

  const handlePdfChange = (pdfFile) => {
    // Open the selected PDF in a new window
    window.open(`/pdfs/${pdfFile}`, '_blank');
  };


  return (
    <div>
      <select 
        value={selectedPdf} 
        onChange={(e) => {
            setSelectedPdf(e.target.value);
            handlePdfChange(e.target.value);
            }}>
        <option value="">Select a PDF to view</option>
        {pdfFiles.map((pdfFile, index) => (
          <option key={index} value={pdfFile}>
            {pdfFile}
          </option>
        ))}
      </select>          
    </div>
  );
}

export default FetchPdfList;
