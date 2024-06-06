import React, { useState } from 'react';
import '../components/hrcss.css'
//import ReactPath from './components/_audio/output_1.mp3'

const BASE_URL = 'http://localhost:5000';

function GenerateTextToSpeech() {

    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [audioURL, setAudioURL] = useState(null);
    const [reactPath, setReactPath] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
        setMessage('');
        //setAudioURL('');
    };

    const generateSpeech = async () => {

        try {

            const headers = {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${token}`,
            };  

            const response = await fetch(`${BASE_URL}/api/text-to-speech`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ text }),
            });
            if (response.status === 200) {               
                const data = await response.json();
                console.log(data); // Check the data received from the server
                setMessage(data.message);
                setAudioURL(data.audio_url);   
                //Creating a complete path to server            
                const serverPath = `${BASE_URL}`+data.audio_url;
                //console.log(serverPath);
                setReactPath(serverPath)
            }
        } catch (error) {
            console.error(error);
            setMessage('Error generating speech');
        }
    };

    return (
        <div className="App">
            <div className='textDecoration'>
                <h3>Text to Speech Converter</h3>
                <hr />
            </div>
            <br/>
            <div>
                <textarea
                    placeholder="Enter text..."
                    rows="4"
                    value={text}
                    onChange={handleTextChange}
                ></textarea>
            </div>
            <div> <button onClick={generateSpeech}>Generate Speech</button></div>           
           
            <p>{message}</p>
            {audioURL && (
                <audio controls>
                    <source src={reactPath} type="audio/mpeg" />
                </audio>
            )}
        </div>
    );
}

export default GenerateTextToSpeech;
