import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Confetti from 'react-dom-confetti';

const CountdownWithVerification = () => {
  const urlParams = new URLSearchParams(window.location.search);
  let script = urlParams.get('script');
  const [seconds, setSeconds] = useState(13);
  const [randomCode, setRandomCode] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showVerifyBtn, setShowVerifyBtn] = useState(false);
  const [timerText, setTimerText] = useState(`👋<b class="Bold">
  ${script.toLocaleUpperCase()}</b> 
  <span id="loadingText">Generating</span>
  <br> <span style="font-size: 19px;">Thank You For Installing Our ${script} Script Want <a style="text-decoration: none;" href="/">More?</a></span>
  <br><span style="font-size: 19px"><b class="Bold">${script}</b> 
  Will Open Soon</span>
  `);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleClick = () => {
    setIsButtonVisible(false);
  };
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
    setTimerText(`Script Code: <b id="code" style="user-select: none;" class="iconsBtns Bold">${code}</b>`);
    setShowVerifyBtn(true);
  };
  const HandleCopy = () => {
    alert("Copied: " + randomCode)
    navigator.clipboard.writeText(randomCode)
  }
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
      setTimerText(`${randomCode} <b class="Bold">Verified!</b> Redirecting...`)
      setIsRunning(true)
      setTimeout(function(){
      window.open(`https://${script}/?key=${randomStart}${randomCode}${randomEnd}`, '_blank');
      },3000)
    } else {
      alert('Incorrect code');
    }
  };
  const config = {
    angle: 180,
    spread: 360,
    startVelocity: 90,
    elementCount: 80,
    dragFriction: 0.1,
    duration: 9000, // Change the duration here for slower confetti
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '1000px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };
  return (
    <div  style={{ overflow:'hidden' }} className='App'>
<Confetti active={isRunning} config={config} />
    <div style={{height: '18px'}}></div>
      <h1 id='timer' style={{display: 'inline' }} dangerouslySetInnerHTML={{ __html: timerText }}></h1>
      {seconds === 0 && randomCode && (
      <button className='iconsBtns'  onClick={HandleCopy} style={{ background: 'transparent', outline: 'none', border: 'none', width: '20px', height: '20px', transition: 'all 0.03s'}}><svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 4h-4a2 2 0 00-2-2H10a2 2 0 00-2 2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
  <rect x="8" y="10" width="12" height="12" rx="1" ry="1" />
</svg>

</button>
      )}
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
       {isButtonVisible && (
        <div className='Options'>
          <h2><b className='Bold'>{script}</b> Script</h2>
          <button onClick={handleClick}>👎🏻</button>
          <button onClick={handleClick}>👍🏼</button>
        </div>
       )}

      <div style={{height: '200px'}}></div>
      <div style={{height: '250px'}}></div>
    </div>
  );
};

export default CountdownWithVerification;
