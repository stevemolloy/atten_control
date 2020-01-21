import React, { useState } from 'react';

const Form = () => {
  const [atten, setAtten] = useState('');

  const handleChange = (event) => {
    setAtten(event.target.value);
  }

  const handleSubmit = (event) => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      console.log(xhr.responseText);
      setAtten(atten);
    });
    xhr.open('POST', 'http://bam-test.maxiv.lu.se:5000/api');
    xhr.send(JSON.stringify({
      'jsonrpc': '2.0',
      'method': 'App.set_atten',
      'params': {'val': atten},
      'id': '1'
    }));
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Attenuation (dB):
          <select value={atten} onChange={handleChange}>
            {[...Array(64)].map((e,i) => {
              if (i===0) return <option key='empty' value="" disabled>---</option>;
              return <option value={i/2} key={i/2}>{i/2}</option>;
            })}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}


export default Form;

