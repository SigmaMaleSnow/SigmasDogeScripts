import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/eclipse.css'; // Light theme

const ReqURl = () => {
  const [code] = useState(`
// Fetch data using fetch
fetch('https://biggemoppify.pythonanywhere.com/search?q={param}')
  .then(response => response.json())
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
      <br/>
      <div className="codeEditorContainer">
        <h1 style={{ textAlign: 'center' }}>How Can I Use This?</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <CodeMirror
            value={code}
            options={{
              mode: 'javascript',
              theme: 'eclipse', // Light theme
              lineNumbers: true,
              readOnly: true, // Make the editor read-only
              lineWrapping: true, // Enable line wrapping
              cursorBlinkRate: -1, // Disable cursor blinking
              viewportMargin: Infinity, // Make editor fill entire container
              scrollbarStyle: null, // Hide scrollbars
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReqURl;
