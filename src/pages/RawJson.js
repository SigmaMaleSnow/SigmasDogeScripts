import React from 'react';
import Cards from '../components/policy';
import './styles/Radata.css';
import JSONViewer from 'react-json-view';

const Json = () => {
  // Sample JSON data
  const jsonData = {
    main: 'Parliament',
    desc: 'The House of Commons (elected, lower Chamber), the Senate (appointed, upper Chamber), and the Monarch (Head of State, who is represented by the Governor General in Canada)',
    sub: "Canada's legislative process involves all three parts of Parliament: the House of Commons (elected, lower Chamber), the Senate (appointed, upper Chamber), and the Monarch (Head of State, who is represented by the Governor General in Canada). These three parts work together to create new laws.",
    rel: [
      'Who is responsible for laws in Canada?',
      'How are Canadian laws created?',
      'Who enforces laws in Canada?',
      'What are the 3 levels of government in Canada?'
    ]
  };
  const MoreJson = {
    main: "Charles A. Lindbergh",
    desc: "Charles A. Lindbergh",
    sub: "On May 21, 1927, Charles A. Lindbergh completed the first solo, nonstop transatlantic flight in history, flying his Spirit of St. Louis from Long Island, New York, to Paris, France.",
    rel: [
      "What was the first flight across the ocean?",
      "Who was the first woman to fly across the Atlantic Ocean?",
      "Who was the first person to fly solo across the Pacific ocean?",
      "Who was the first human to fly?"
    ]
  };
  const LastJson = {
    main: "",
    desc: "",
    sub: "Thomas Jefferson, a spokesman for democracy, was an American Founding Father, the principal author of the Declaration of Independence (1776), and the third President of the United States (1801–1809).",
    rel: [
      "Who was the 5 President?",
      "Who was the fourth President?",
      "Who was 3rd President of USA?",
      "Who became the third President and vice president?"
    ]
  };

  return (
    <div>
      <div className="Json" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff00', padding: '20px' }}>
        <div className="JsonContent" style={{ maxWidth: '80%', overflowX: 'auto', textAlign: 'left' }}>
          <h1>Example API Response</h1>
          <JSONViewer src={jsonData} />
          <JSONViewer src={MoreJson} />
          <JSONViewer src={LastJson} />
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Next Steps:</h1>
        <Cards />
      </div>
    </div>
  );
};

export default Json;
