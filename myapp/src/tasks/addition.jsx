import React, { useState } from "react";
import './style.css'
function Addition() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [Total, setTotal] = useState(0);

  function addTotal() {
    const result = parseFloat(number1) + parseFloat(number2);
    if (!isNaN(result)) {
      setTotal(result);
    } else {
      setTotal('Please enter valid numbers');
    }
  }

  return (
    <div className="container">
      <h1 className="title">React Js Add Two Numbers</h1>
      <label for="First number">Enter the First Number:     <input type="number" className="input" value={number1} onChange={(e) => setNumber1(e.target.value)}/></label>
      <label for="Second number">Enter the Second Number:   <input
        type="number" className="input" value={number2} onChange={(e) => setNumber2(e.target.value)}/></label>
      <button className="button" onClick={addTotal}>
        Add
      </button>
      <p className="result">Result: {Total}</p>
    </div>
  );
}

export default Addition;
