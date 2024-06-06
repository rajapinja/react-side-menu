import React, { useState } from 'react';
import officegen from 'officegen';

function URL2PPT() {
  const [youtubeURL, setYoutubeURL] = useState('');
  
  const handleURLChange = (event) => {
    setYoutubeURL(event.target.value);
  };

  const handleDownload = () => {
    const pptx = officegen('pptx');
    
    // Add a slide
    const slide = pptx.makeNewSlide();
    
    // Embed the YouTube video into the slide
    slide.addMedia({
      type: 'onlineVideo',
      path: youtubeURL,
      onlineVideoLink: youtubeURL,
      onlineVideoEmbed: true,
    });

    const pptxBuffer = pptx.generate();
    downloadPPTX(pptxBuffer, 'presentation.pptx');
  };

  const downloadPPTX = (data, filename) => {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>YouTube Presentation Downloader</h1>
      <form onSubmit={handleDownload}>
        <label>
          Enter YouTube URL:
          <input
            type="text"
            value={youtubeURL}
            onChange={handleURLChange}
          />
        </label>
        <button type="submit">Download Presentation</button>
      </form>
    </div>
  );
}

export default URL2PPT;
