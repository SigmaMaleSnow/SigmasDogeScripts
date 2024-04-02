import React from 'react';
import './styles/Radata.css'
import Cards from '../components/policy';
const About = () => {
  return (
    <div>
        <div style={{ height: '120px' }}></div>
    <div className="history-api-container">
      <h1>Welcome to Our History/Facts API</h1>
      <p className="api-description">
        Looking for a hassle-free way to access historical facts? Our free history/facts API is designed just for you! It's super easy to use and explore, no complicated jargon or big words to decipher. Dive into a treasure trove of information with a simple click. Whether you're a student researching a project or a curious mind eager to learn, our API has got you covered. Discover fascinating facts and delve into the past effortlessly. Try it out today and unlock a world of knowledge at your fingertips!
      </p>
    </div>
    <h1 style={{ textAlign: 'center'}}>What Now?</h1>
      <Cards/>
    </div>
    
  );
};

export default About;
