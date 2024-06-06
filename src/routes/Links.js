// App.js
import React, {useState} from 'react';
import DynamicUtilityLinks from '../components/DynamicUtilityLinks';
import freelancer_img from '../components/images/freelancer_img.jpg';
import ts_teachers_img from '../components/images/Telangana-Teachers.jpg';
import laraid_img from '../components/images/Logo_laraid.jpeg'



const cardsData = [
  {
    title: 'Freelancer Platforms',
    imagePath: {freelancer_img},
    links: [
      { url: 'https://www.upwork.com/nx/find-work/best-matches', description: 'Upwork', label: 'Upwork' },
      { url: 'https://www.freelancer.in/dashboard', description: 'Freelancer', label: 'Freelancer' },
      { url: 'https://www.fiverr.com/', description: 'Fiverr', label: 'Fiverr' },
      { url: 'https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit', description: 'LinkedIn', label: 'LinkedIN' },
      { url: 'https://www.guru.com/pro/', description: 'Guru', label: 'Guru' },
      { url: 'https://www.flexjobs.com/', description: 'Flexjobs', label: 'Flexjobs' },
      { url: 'https://www.toptal.com/', description: 'Toptal', label: 'Toptal' },
      { url: 'https://www.behance.net/', description: 'Behance', label: 'Behance' },
      { url: 'https://www.designhill.com/', description: 'Designhill', label: 'Designhill' },
      // Add more links as needed
    ],
  },
  {
    title: 'Telangana Teacher(s) links',
    imagePath: {ts_teachers_img},
    links: [
      { url: 'https://ifmis.telangana.gov.in/get_payslip_publicview', description: 'IFMIS-2002041', label: 'IFMIS' },
      { url: 'https://epanchayat.telangana.gov.in/zpgpf/index.jsp', description: 'Zilla Parshad GPF(8543)', label: 'ZP-GPF' },
      // Add more links as needed
    ],
  },
  {
    title: 'Public Service Portal',
    imagePath: 'path/to/teacher/image.jpg',
    links: [
      { url: 'https://voters.eci.gov.in/', description: 'Electoral Portal', label: 'Indian Voter Services' },
      { url: 'https://www.onlineservices.nsdl.com/paam/requestAndDownloadEPAN.html', description: 'Pemanent Account Number', label: 'PAN Download' },
      { url: 'https://myaadhaar.uidai.gov.in/genricDownloadAadhaar', description: 'e-Aadhar', label: 'e-Aadhar Download' },
      { url: 'https://www.transport.telangana.gov.in/html/driving-licence.html', description: 'TS RTA Portal', label: 'Driving License' },
      { url: 'https://ts.meeseva.telangana.gov.in/meeseva/home.htm', description: 'MeeSeva TS Civil Services', label: 'MeeSeva Services' },
     
      // Add more links as needed
    ],
  },
  {
    title: 'AI Tools',
    imagePath: 'path/to/teacher/image.jpg',
    links: [
      { url: 'https://chat.openai.com/', description: ' OpenAI ChatGPT 3', label: 'ChatGPT' },
      { url: 'https://bard.google.com/chat', description: 'Google BARD', label: 'BARD' },
      { url: 'https://www.bing.com/search?q=What+can+the+new+Bing+chat+do+for+you%3F&showconv=1&form=M403K8', description: ' MicroSoft Bing', label: 'BingPT' },
      // Add more links as needed
    ],
  },
  {
    title: 'TS Bill Payments',
    imagePath: 'path/to/teacher/image.jpg',
    links: [
      { url: 'https://paytm.com/challan-bill-payment/telangana-traffic-police ', description: 'TS e-challan', label: 'TS Traffic voilation' },
      { url: 'https://tssouthernpower.com/onlinebillenquiry', description: 'TS Southern Power', label: 'Services' },
      { url: 'https://www.billdesk.com/pgidsk/pgmerc/tsspdclpgi/TSSPDCLPGIDetails.jsp', description: 'TS Southern Power', label: 'Electricity Payment' },
      { url: 'https://www.jio.com/selfcare/login/', description: ' Relience JIO Fiber', label: 'JIO Broadband' },
      { url: 'https://www.sundirect.in/', description: ' SunDirect', label: 'SunDirect' },
      { url: 'https://www.acko.com/', description: ' ACKO Insurance', label: 'ACKO' },
      // Add more links as needed 
    ],
  },
  {
    title: 'LARAID SOFTWARE SOLUTIONS',
    imagePath: {laraid_img},
    links: [
      { url: 'https://www.laraidsolutions.com/ ', description: 'My Startup Company', label: 'laraidsolutions' },
      { url: 'https://learn.be10x.in/', description: 'Be 10X', label: 'AI Learnings' },
      { url: 'https://web.whatsapp.com/', description: 'Social Media Platform', label: 'WhatsApp' },
      { url: 'https://www.pdfill.com/pdf_tools_free.html', description: 'PDF Utility', label: 'PDF Edit utility' },
      { url: 'https://chat.openai.com', description: ' ChatGPT 3.0', label: 'AI Tool' },     
      // Add more links as needed 
    ],
  },
  {
    title: 'PERSONAL LOANS',
    imagePath: 'path/to/teacher/image.jpg',
    links: [
      { url: 'https://netbanking.hdfcbank.com/netbanking/LNLoanNewRegister.html', description: 'HDFC Personal Loan EMI 17345 :', label: 'HDFC PERSONAL LOAN' },
      { url: 'https://infinity.icicibank.com/corp/Finacle;jsessionid=0000SALsS1jFabhhwrzfnRrpm2L:CR32n43wcr?bwayparam=Kgu%2BoAAv%2BapD05jW8U6CR63uTI1AWmnBd9Ovi12bN1g%3D', description: 'ICICI PERSONAL LOAN EMI 32213 :', label: 'ICICI PERSONAL LOAN' },
      { url: 'https://infinity.icicibank.com/corp/Finacle;jsessionid=0000SALsS1jFabhhwrzfnRrpm2L:CR32n43wcr?bwayparam=Kgu%2BoAAv%2BapD05jW8U6CR63uTI1AWmnBd9Ovi12bN1g%3D', description: 'ICICI PERSONAL LOAN EMI 4336 : ', label: 'ICICI PERSONAL LOAN' },
      { url: 'https://infinity.icicibank.com/corp/Finacle;jsessionid=0000SALsS1jFabhhwrzfnRrpm2L:CR32n43wcr?bwayparam=Kgu%2BoAAv%2BapD05jW8U6CR63uTI1AWmnBd9Ovi12bN1g%3D', description: 'INDUS BANK CC EMI 10213 :', label: 'INDUS CC LOAN' },
      { url: 'https://netbanking.hdfcbank.com/netbanking/LNLoanNewRegister.html', description: ' HDFC CONSUMER LOAN EMI 12066 :', label: 'HDFC CONSUMER LOAN' },
      { url: 'https://infinity.icicibank.com/corp/Finacle;jsessionid=0000SALsS1jFabhhwrzfnRrpm2L:CR32n43wcr?bwayparam=Kgu%2BoAAv%2BapD05jW8U6CR63uTI1AWmnBd9Ovi12bN1g%3D', description: '  TATA CAPITAL PER LOAN EMI 22213 :', label: 'TATA CAPITAL PER LOAN' },     
      { url: 'https://infinity.icicibank.com/corp/Finacle;jsessionid=0000SALsS1jFabhhwrzfnRrpm2L:CR32n43wcr?bwayparam=Kgu%2BoAAv%2BapD05jW8U6CR63uTI1AWmnBd9Ovi12bN1g%3D', description: ' ICICI PERSONAL LOAN EMI 21888 : ', label: 'ICICI PERSONAL LOAN' },
      { url: 'https://infinity.icicibank.com/corp/Finacle;jsessionid=0000SALsS1jFabhhwrzfnRrpm2L:CR32n43wcr?bwayparam=Kgu%2BoAAv%2BapD05jW8U6CR63uTI1AWmnBd9Ovi12bN1g%3D', description: '  ICICI PERSONAL LOAN EMI 21494 :', label: 'ICICI PERSONAL LOAN'},     
      // Add more links as needed 
    ],
  }
  // Add more cards as needed
];

const Links = () => {

  

  return (
    <div>
      <DynamicUtilityLinks cards={cardsData} />            
    </div>
    
  );
};

export default Links;
