import React, { useState } from 'react';
// import JsonRpcClient from 'react-jsonrpc-client';
import './App.css';

const App = () => {
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

const Form = () => {
  const [atten, setAtten] = useState(32.0);
  const attenBtnAction = () => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      console.log(xhr.responseText);
      setAtten(atten-0.5);
    });
    xhr.open('POST', 'http://bam-test.maxiv.lu.se:5000/api');
    xhr.send(JSON.stringify({
      'jsonrpc': '2.0',
      'method': 'App.set_atten',
      'params': {'val': atten-0.5},
      'id': '1'
    }));
  }

  return (
    <div>
      <p>You set the attenuation to {atten}dB.</p>
      <button onClick={attenBtnAction}>
        Click?
      </button>
    </div>
  );
}


export default App;
