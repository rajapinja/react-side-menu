// PdfList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPDF from '@react-pdf/renderer';

const BASE_URL = 'http://localhost:3001'

function FetchLaraidPdfList({ onPdfSelected }) {
  const [laraidPdfFiles, setLaraidPdfFiles] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    const fetchPdfFiles = async () => {
        try {
            const headers = {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            };         
            const response = await fetch(`${BASE_URL}/api/laraid/pdfs`, { headers });     
            if (response.ok) {
              console.log('Inside response.ok')
              const laraidPdfFiles = await response.json();
              setLaraidPdfFiles(laraidPdfFiles);
              console.log("PDF files:", laraidPdfFiles);
            } else {
              console.error('Failed to fetch PDF files:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching PDF files:', error);
          }
    };

    fetchPdfFiles();
  }, []);

  const handlePdfChange = (laraidPdfFile) => {
    // Open the selected PDF in a new window
    window.open(`/_laraid/_pdfs/${laraidPdfFile}`, '_blank');
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
        {laraidPdfFiles.map((laraidPdfFile, index) => (
          <option key={index} value={laraidPdfFile}>
            {laraidPdfFile}
          </option>
        ))}
      </select>          
    </div>
  );
}

export default FetchLaraidPdfList;
