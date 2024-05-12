import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './pages/styles/Navbar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountdownWithVerification from './pages/ScriptVerif';
import Home  from './pages/Home';
import Privacy from './pages/Privacy';
import Json from './pages/RawJson';
import ReqURl from './pages/reqURL';
import About from './pages/About';
import Promo from './pages/Promo';
import { AdBlockDetectedWrapper } from "adblock-detect-react";
import Key from './pages/Key';
const App = () => {
const [remainingTime, setRemainingTime] = useState('');
const targetDate = moment('2024-6-29');
useEffect(() => {
const interval = setInterval(() => {
  const now = moment();
  const remaining = moment.duration(targetDate.diff(now));

  const days = Math.floor(remaining.asDays());
  const hours = remaining.hours();
  const minutes = remaining.minutes();

  setRemainingTime(`${days} Days, ${hours} Hours, ${minutes} Minutes`);
}, 1000);

return () => clearInterval(interval);

}, [targetDate]);
const [showMessage, setShowMessage] = useState(true);
const handleCloseMessage = () => {
  setShowMessage(false);
};
useEffect(() => {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = 'https://media.giphy.com/media/CxYGmxv0Oyz4I/giphy.gif';
  document.head.appendChild(link);
  return () => {
    document.head.removeChild(link);
  };
  
}, [showMessage]);
document.title = `DogeScripts: ${remainingTime}`;

return (
<BrowserRouter>
{showMessage && (
        <AdBlockDetectedWrapper>
          <div className='anti_adblock'>
          <h1>AD BLOCKER</h1>
          <p><b className="Bold">Vital Reminder!</b> We've identified that your <b className="Bold">ad blocker</b> is currently enabled. Our website depends on <b className="Bold">advertisements</b> to maintain its <b className="Bold">free content</b> and services. By <b className="Bold">disabling</b> your ad blocker, you directly support our platform's ability to provide <b className="Bold">valuable resources</b> to our visitors. We appreciate your cooperation in ensuring a sustainable and enriching browsing experience for all. Thank you for your understanding and <b className="Bold">generosity</b>!</p>
            <button className='closeButton' onClick={handleCloseMessage}>❌</button>
          </div>
        </AdBlockDetectedWrapper>
      )}
<div className="app">
<div className="navbar">
<div>
<li className="logo"><a href="/">Dogescripts</a></li>
<li className="logo"><a href="/">👋History API</a></li>
</div>
<ul>
<li><a href="/">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/requrl">Request</a></li>
<li><a href='/json'>Example</a></li>
</ul>
</div>
<div className="container">
<footer className="footer">
<div className="privacy-policy">
  <a href="/privacy-policy">Privacy Policy</a>
</div>
</footer>

</div>
<div className={showMessage ? 'blocked-content' : ''}>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/games" element={<CountdownWithVerification />} />
  <Route path='/privacy-policy' element={<Privacy/>} />
  <Route path='/json' element={<Json/>} />
  <Route path='/requrl' element={<ReqURl/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/games/promo-page' element={<Promo/>} />
  <Route path='/script/key-unlock' element={<Key/>} />
</Routes>
</div>
</div>
<div style={{ width: '100%', height: '200px'}}></div>
<footer className="custom-footer">
  <div className="footer-container">
    <div className="footer-row">
      <div className="footer-col">
        <h3>About This API</h3>
        <p>Explore history effortlessly with our user-friendly free history/facts API. Unlock a wealth of knowledge and dive into the past with ease. Perfect for students, researchers, and history enthusiasts alike. Start exploring today and discover the wonders of our shared heritage!</p>
      </div>
    </div>
    <div className="footer-row">
      <div className="footer-col">
      </div>
    </div>
  </div>
</footer>
</BrowserRouter>
);
};

export default App;
