import './styles/HomeCSS.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Home = () => {
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

  return (
    <div className="home">
      <h1>👋Hello, World!</h1>
      <p>Site launching with Dogescripts.com domain in <b className='Bold AllCaps'>{remainingTime}</b></p>
      <p><b className='Bold'>Testing</b> for upcoming site launch traffic.</p>
      <section className='t'>
        <hr />
        <br />
        <div className='longCard'>
          <div className='FloatL'><img src='https://th.bing.com/th/id/R.bc8abf4164cb9ae12872dd77956f3753?rik=Gl3gxHAwUT%2bJ7g&pid=ImgRaw&r=0' width={60} height={60} alt='placeholder' /></div>
          <h1 className='inlineDisplay'><a href='/'>Lorem ipsum dolor sit amet, consectetur</a></h1>
          <p className='inlineDisplay'>elit. Vestibulum sed est vitae libero ultricies fermentum in id nisi.</p>
        </div>
        <br />
        <div className='longCard'>
          <div className='FloatL'><img src='https://th.bing.com/th/id/R.bc8abf4164cb9ae12872dd77956f3753?rik=Gl3gxHAwUT%2bJ7g&pid=ImgRaw&r=0' width={60} height={60} alt='placeholder' /></div>
          <h1 className='inlineDisplay'><a href='/'>Lorem dolor sit</a></h1>
          <p className='inlineDisplay'>elit. Vestibulum sed est vitae libero.</p>
        </div>
        <br />
        <div className='longCard'>
          <div className='FloatL'><img src='https://th.bing.com/th/id/R.bc8abf4164cb9ae12872dd77956f3753?rik=Gl3gxHAwUT%2bJ7g&pid=ImgRaw&r=0' width={60} height={60} alt='placeholder' /></div>
          <h1 className='inlineDisplay'><a href='/'>Lorem amet, consectetur</a></h1>
          <p className='inlineDisplay'>elit. Vitae libero ultricies fermentum in id nisi.</p>
        </div>
        <br />
      </section>
    </div>
  );
}

export default Home;
