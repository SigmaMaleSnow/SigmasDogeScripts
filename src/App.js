import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './pages/styles/Navbar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountdownWithVerification from './pages/ScriptVerif';
import Home  from './pages/Home';
import Privacy from './pages/Privacy';
import ConsentBanner from './components/cookie'
import Json from './pages/RawJson';
import ReqURl from './pages/reqURL';
import About from './pages/About';
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
useEffect(() => {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = 'https://media.giphy.com/media/CxYGmxv0Oyz4I/giphy.gif';
  document.head.appendChild(link);
  return () => {
    document.head.removeChild(link);
  };
}, []);
document.title = `DogeScripts: ${remainingTime}`;

return (
<BrowserRouter>
<ConsentBanner/>
<div className="app">
<div className="navbar">
<div>
<li className="logo"><a href="/">Dogescripts</a></li>
<li className="logo"><a href="/">History/Facts API</a></li>
</div>
<ul>
<li><a href="/">API</a></li>
<li><a href="/about">About</a></li>
<li><a href="/requrl">Request URL</a></li>
<li><a href='/json'>JSON Example</a></li>
</ul>
</div>
<div className="container">
<footer className="footer">
<div className="privacy-policy">
  <a href="/privacy-policy">Privacy Policy</a>
</div>
</footer>

</div>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/games" element={<CountdownWithVerification />} />
  <Route path='/privacy-policy' element={<Privacy/>} />
  <Route path='/json' element={<Json/>} />
  <Route path='/requrl' element={<ReqURl/>} />
  <Route path='/about' element={<About/>} />
</Routes>
</div>
<div style={{ width: '100%', height: '200px'}}></div>
<footer className="custom-footer">
  <div className="footer-container">
    <div className="footer-row">
      <div className="footer-col">
        <h3>About This API</h3>
        <p>Explore history effortlessly with our user-friendly free history/facts API. Unlock a wealth of knowledge and dive into the past with ease. Perfect for students, researchers, and history enthusiasts alike. Start exploring today and discover the wonders of our shared heritage!</p>
      </div>
      <div className="footer-col">
        <h3>Contact Us</h3>
        <ul>
          <li><a style={{ textDecoration: 'none'}} href='/'>opsonlose@gmail.com</a></li>
        </ul>
        <h3>Pages</h3>
        <ul>
          <li><a href='/'>Home</a></li>
        </ul>
        <ul>
          <li><a href='/about'>About</a></li>
        </ul>
        <ul>
          <li><a href='/requrl'>Request URL</a></li>
        </ul>
        <ul>
          <li><a href='/json'>JSON Example</a></li>
        </ul>
        
      </div>
    </div>
    <div className="footer-row">
      <div className="footer-col">
        <h2>Cookies And Privacy</h2>
      <ul>
          <li><a href='/json'>Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</BrowserRouter>
);
};

export default App;
