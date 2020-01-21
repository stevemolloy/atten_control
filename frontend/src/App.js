import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          BAM-test attenuation control
        </p>
      </header>
      <Form/>
    </div>
  );
}

function Form() {
  const [atten, setAtten] = useState(32.0);

  return (
    <div>
      <p>You set the attenuation to {atten}dB.</p>
      <button onClick={() => setAtten(atten-0.5)}>
        Click?
      </button>
    </div>
  );
}

export default App;
