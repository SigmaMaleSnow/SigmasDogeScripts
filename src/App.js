import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './pages/styles/Navbar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountdownWithVerification from './pages/ScriptVerif';
import Home  from './pages/Home';
import Privacy from './pages/Privacy';
import Promo from './pages/Promo';
import Key from './pages/Key';
const App = () => {
const [remainingTime, setRemainingTime] = useState('');
const targetDate = moment('2026-5-29');
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


document.title = `DogeScripts: ${remainingTime}`;

return (
<BrowserRouter>
<div className="app">
<div className="navbar">
<div>
<li className="logo"><a href="/">Dogescripts</a></li>
<li className="logo"><a href="/">👋MerCWare❤️</a></li>
</div>
<ul>
<li><a href="/#scripts">Services</a></li>
<li><a href="/games?script=krunker.io">Keys</a></li>
<li><a href="/#about">About</a></li>
</ul>
</div>
<div className="container">
<footer className="footer">
<div className="privacy-policy">
  <a href="/privacy-policy">Privacy Policy</a>
</div>
</footer>

</div>
<div>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/games" element={<CountdownWithVerification />} />
  <Route path='/privacy-policy' element={<Privacy/>} />
  <Route path='/games/promo-page' element={<Promo/>} />
  <Route path='/script/key-unlock' element={<Key/>} />
</Routes>
</div>
</div>
<div style={{ width: '100%', height: '200px'}}></div>
<footer>

</footer>
</BrowserRouter>
);
};

export default App;
