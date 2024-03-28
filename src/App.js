import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './pages/styles/Navbar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountdownWithVerification from './pages/ScriptVerif';
import Home  from './pages/Home';

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
<div className="app">
<div className="navbar">
<div>
<li className="logo"><a href="/">Dogescripts</a></li>
<li className="logo"><a href="/">Launching {remainingTime}</a></li>
</div>
<ul>
<li><a href="/">Projects</a></li>
<li><a href='/'>Tutorials</a></li>
<li><a href="/">Userscripts</a></li>
<li><a href="/">Exclusive Scripts</a></li>
</ul>
</div>
<div className="container">
<footer className="footer">
<div className="privacy-policy">
  <a href="#privacy-policy">Privacy Policy</a>
</div>
</footer>

</div>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/games" element={<CountdownWithVerification />} />
</Routes>
</div>

<footer className="custom-footer">
  <div className="footer-container">
    <div className="footer-row">
      <div className="footer-col">
        <h3>About Us</h3>
        <p>This is a test to prepare for the launch of the official site and to gauge traffic levels.</p>
      </div>
      <div className="footer-col">
        <h3>Contact Us</h3>
        <ul>
          <li><a href='/'>Contact</a></li>
        </ul>
        <h3>Pages</h3>
        <ul>
          <li><a href='/'>Home</a></li>
        </ul>
        <ul>
          <li><a href='/'>Userscripts</a></li>
        </ul>
        <ul>
          <li><a href='/'>Projects</a></li>
        </ul>
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
