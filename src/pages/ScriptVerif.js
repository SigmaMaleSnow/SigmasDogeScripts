import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Confetti from 'react-dom-confetti';

const CountdownWithVerification = () => {
  const urlParams = new URLSearchParams(window.location.search);
  let script = urlParams.get('script');
  const [seconds, setSeconds] = useState(5);
  const [randomCode, setRandomCode] = useState('');

  const [isRunning, setIsRunning] = useState(false);

  const [timerText, setTimerText] = useState(`
  <b style="font-size: 36px">👋<b class="Bold">${script.toLocaleUpperCase()}</b> <span id="loadingText">Generating</span></b>
  <br> <span style="font-size: 21px;">Thank You For Installing Our ${script} Script Want <a style="text-decoration: none;" href="/">More?</a></span>
  <br><span style="font-size: 21px"><b class="Bold">${script}</b> Coming Soon!</span>
  <br>

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
    setTimerText(``);

  };

  const Start = ["H7", "J6", "P9", "H8"];
  const End = ["BJ8", "C8Y", "PLOG", "C149"];

  const randomStartIndex = Math.floor(Math.random() * Start.length);

  const randomStart = Start[randomStartIndex];

  const randomEndIndex = Math.floor(Math.random() * End.length);

  const randomEnd = End[randomEndIndex];
  let canOpen = false
  const handleVerifyClick = () => {
      if(canOpen){
      setTimerText(``)
      setIsRunning(true)
      setTimeout(function(){
      window.open(`https://${script}/?key=${randomStart}${randomCode}${randomEnd}`, '_blank');
      },3000)
    }else{
      alert('Must Follow Account')
    }
  };
  const handleRedirect = () => {
    window.open('https://www.tiktok.com/@goodbye.3.0.2', '_blank')
    canOpen = true
  }
  const config = {
    angle: 180,
    spread: 360,
    startVelocity: 100,
    elementCount: 120,
    dragFriction: 0.1,
    duration: 9000, // Change the duration here for slower confetti
    stagger: 2,
    width: '10px',
    height: '10px',
    perspective: '1000px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };
  const pfp = `https://www.google.com/s2/favicons?sz=64&domain=${script}`
  return (
    <div  style={{ overflow:'hidden' }} className='App'>
<Confetti active={isRunning} config={config} />
    <div style={{height: '18px'}}></div>
      <h1 id='timer' style={{display: 'inline' }} dangerouslySetInnerHTML={{ __html: timerText }}></h1>
      {seconds === 0 && randomCode && (
        
        <div>
          <br />
          <button className='verBtn' onClick={handleRedirect}>Follow @goodbye.3.0.2 On TikTok</button>
          <br />
          <button className='verBtn' onClick={handleVerifyClick}>Open "{script}"</button>
        </div>
      )}

       {isButtonVisible && (
        <div className='Options'>
          <section style={{ marginTop: '-10px' }}>
          <h2><img style={{ borderRadius: '8px'}} width={50} height={50} src={pfp} alt='Domain Icon' ></img><strong style={{ fontWeight: '600' }}>{script.toUpperCase()}</strong></h2>
          <button onClick={handleClick}>&#x1F44E;</button>
          <button onClick={handleClick}>&#x1F44D;</button>
          </section>
        </div>
       )}
      <div style={{height: '150px'}}></div>
      <div style={{height: '250px'}}></div>
    </div>
  );
};

export default CountdownWithVerification;
