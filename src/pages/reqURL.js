import React, { useState } from 'react';
import './styles/HomeCSS.css';

const ReqURl = () => {
  const [code] = useState(`
// Fetch data using fetch
fetch('https://biggemoppify.pythonanywhere.com/search?q={param}')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Fetch data using Axios
axios.get('https://biggemoppify.pythonanywhere.com/search?q={param}')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
`);

  const copyToClipboard = () => {
    const inputElement = document.getElementById('teamInput');
    inputElement.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Get Request URL!</h1>
      <section className='t'>
        <div className="containerWthis">
          <input
            id="teamInput"
            className='inputtext'
            type="text"
            placeholder="Request URL!"
            value='https://biggemoppify.pythonanywhere.com/search?q={Any History Question You Have}'
            spellCheck={false} // Disable spell check
          />
          <button className='button' onClick={copyToClipboard}>Copy</button>
        </div>
      </section>
      <div className="codeEditorContainer">
        <h1 style={{ textAlign: 'center' }}>How Can I Use This?</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <textarea
            value={code}
            readOnly
            style={{
              width: '100%',
              height: '360px',
              fontFamily: 'monospace',
              fontSize: '14px',
              padding: '10px',
              boxSizing: 'border-box',
              resize: 'none',
              outline: 'none',
              border: 'none',
              overflow: 'hidden',
              borderRadius: '10px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReqURl;
