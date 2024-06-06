import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define styles for your PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textDecoration: 'underline',
  },
  content: {
    fontSize: 12,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Sample PDF Document</Text>
        <Text style={styles.content}>This is a simple PDF document generated using @react-pdf/renderer.</Text>
      </View>
    </Page>
  </Document>
);

const PdfGenerator = () => (
  <PDFViewer width="100%" height={500}>
    <MyDocument />
  </PDFViewer>
);

export default PdfGenerator;
