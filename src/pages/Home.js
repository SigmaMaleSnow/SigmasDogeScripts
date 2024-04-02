import Cards from '../components/policy';
import './styles/HomeCSS.css';
import React, { Fragment, useState, useEffect } from 'react';

const GetStartedArray = [
  "Who is actually the first president?",
  "Who originally made Discord?",
  "World's oldest Dog?",
  "What is the oldest cat alive right now?",
  "What started World War 2?",
  "Who invented a wheel?",
  "When did Shaq and Kobe win their first championship?",
  "Has anyone lived past 120?",
  "How many Americans have diabetes?",
  "Who is the first YouTuber?",
  "Who was the first female Prime Minister of the United Kingdom?",
  "What year did the Berlin Wall fall?",
  "Who discovered penicillin?",
  "What was the name of the first human to travel into space?",
  "Who is known as the 'Father of the Computer'?",
  "What was the Treaty of Versailles?",
  "Who painted the Mona Lisa?",
  "When was the Magna Carta signed?",
  "Who wrote the novel '1984'?"
]
const Home = () => {
const [searchResult, setSearchResult] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [shuffledArray, setShuffledArray] = useState([]);
const handleSearch = async () => {
const teamName = document.getElementById('teamInput').value;
if (teamName.trim() !== '') {
try {
  setIsLoading(true);
  const response = await fetch(`https://biggemoppify.pythonanywhere.com/search?q=${teamName}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const responseData = await response.json();
  setSearchResult(responseData);
} catch (error) {
  setSearchResult({ error: 'Error fetching data. Please try again later.' });
} finally {
  setIsLoading(false); 
}
} else {
setSearchResult({ error: 'Please enter a Vaild Search.' });
}
};
const HandleBtn = (a) => {
  document.getElementById('teamInput').value = a
  window.setTimeout(()=>handleSearch(),100)
}
useEffect(() => {
  const shuffled = GetStartedArray.slice().sort(() => Math.random() - 0.5);
  setShuffledArray(shuffled.slice(0, 4));
}, []);

return (
<div className="home">
<h1 className='Bold'>👋History/Facts API</h1>
<p><b className='Bold'>Open</b> Source Request URL</p>
<section className='t'>
  <div className="containerWthis">
    <input id="teamInput" className='inputtext' type="text" placeholder="Try It Out? Enter History/Facts you Want to know about..." />
    <button className='button' onClick={handleSearch}>Search</button>
    <br/>
    {isLoading ? (
      <div className="displaythsi">
        <div className="skeleton-loading" style={{ width: '70%', height: '50px', marginTop: '30px',float: 'left' }}></div>
        <div className="skeleton-loading" style={{ width: '80%', height: '30px', marginTop: '10px',float: 'left' }}></div>
        <div className="skeleton-loading" style={{ width: '90%', height: '20px', marginTop: '10px',float: 'left' }}></div>
        <div className="skeleton-loading" style={{ width: '100%', height: '100px', marginTop: '20px',float: 'left' }}></div>
        <div className="skeleton-loading" style={{ width: '100%', height: '100px', marginTop: '20px',float: 'left' }}></div>
        <div className="skeleton-loading" style={{ width: '100%', height: '100px', marginTop: '20px',float: 'left' }}></div>
        <div className="skeleton-loading" style={{ width: '100%', height: '100px', marginTop: '20px',float: 'left' }}></div>
        <div style={{ width: '100%', height: '10px', marginTop: '10px',float: 'left' }}></div>

      </div>
    ) : (
      searchResult ? (
        <div className="searchResult">
          {searchResult.error ? (
             <div>
             <br/>
           <h2 className='result'>No Results😞:</h2>
           <p className='result'>How about giving it another shot?</p>
           {shuffledArray && shuffledArray.map((element, index) => (
        <Fragment key={index}>
          <br />
          <button onClick={() => HandleBtn(element)} className='buttonrel'>{element}</button>
          <br />
        </Fragment>
      ))}
         </div>
          ) : (
            <Fragment>
              <br/>
              <h1 className="result Bold less">{searchResult.main}</h1>
              <h2 className="result">{searchResult.desc}</h2>
              <p className="result typing-animation">{searchResult.sub}</p>
              <h2 className="result">Related History/Facts</h2>
              {searchResult.rel && Array.isArray(searchResult.rel) && (
                  searchResult.rel.map((element, index) => (
                  <Fragment>
                    <br/>
                    <button onClick={() => HandleBtn(element)} className='buttonrel' key={index}>{element}</button>
                    <br/>
                 </Fragment>
              ))
            )}
            </Fragment>
          )}
        </div>
      ) : (
        <div>
      <br />
      <h2 className='result'>Get Started:</h2>
      <p className='result'>Come check out our API and see what it can do! Start exploring now for some amazing possibilities!</p>
      {shuffledArray && shuffledArray.map((element, index) => (
        <Fragment key={index}>
          <br />
          <button onClick={() => HandleBtn(element)} className='buttonrel'>{element}</button>
          <br />
        </Fragment>
      ))}
    </div>
      )
    )}
    <br></br>
  <p className='result'><b className='Bold'>Please</b> be aware that this API is still under development, and as a result, it may not provide valid responses at this time. We are actively working to resolve these issues and improve its functionality. </p>
  </div>
</section>
<Cards/>
</div>
);
};

export default Home;
