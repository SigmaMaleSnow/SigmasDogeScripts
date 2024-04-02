import React, { useState, useEffect } from 'react';
import './styles/App.css';

const CountdownWithVerification = () => {
  const urlParams = new URLSearchParams(window.location.search);
  let script = urlParams.get('script');
  const [seconds, setSeconds] = useState(8);
  const [randomCode, setRandomCode] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showVerifyBtn, setShowVerifyBtn] = useState(false);
  const [timerText, setTimerText] = useState(`👋<b class="Bold">${script.toLocaleUpperCase()}</b> <span id="loadingText">Generating</span><br> <span style="font-size: 19px;">Join The Discord <a href="/">https://discord.gg/comingSoon</a></span> <br><span style="font-size: 19px"><b class="Bold">${script}</b> Will Open Soon</span>`);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => (prevSeconds > 0 ? prevSeconds - 1 : prevSeconds));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0 && !randomCode) {
      generateRandomCode();
    }
  }, [seconds, randomCode]);

  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    setRandomCode(code);
    setTimerText(`Script Code: <b class="Bold">${code}</b>`);
    setShowVerifyBtn(true);
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  const Start = ["H7", "J6", "P9", "H8"];
  const End = ["BJ8", "C8Y", "PLOG", "C149"];

  const randomStartIndex = Math.floor(Math.random() * Start.length);

  const randomStart = Start[randomStartIndex];

  const randomEndIndex = Math.floor(Math.random() * End.length);

  const randomEnd = End[randomEndIndex];
  const handleVerifyClick = () => {
    if (inputValue === randomCode) {
      window.location.href = `https://${script}/?key=${randomStart}${randomCode}${randomEnd}`
    } else {
      alert('Incorrect code');
    }
  };

  return (
    <div className='App'>
      <h1 id='timer' dangerouslySetInnerHTML={{ __html: timerText }}></h1>
      {seconds === 0 && randomCode && (
        <div>
          <br />
          <input className='verInput' placeholder='Enter Code...'  type="text" value={inputValue} onChange={handleInputChange} />
          <br />
          <button className='verBtn' onClick={handleVerifyClick}>Open "{script}"</button>
        </div>
      )}
      {showVerifyBtn && seconds !== 0 && (
        <div>
          <input className='verInput' type="text" placeholder='Enter Code...' value={inputValue} onChange={handleInputChange} />
          <br />
          <button className='verBtn' onClick={handleVerifyClick}>Open "{script}"</button>
        </div>
      )}
      <div style={{height: '250px'}}></div>
    </div>
  );
};

export default CountdownWithVerification;
