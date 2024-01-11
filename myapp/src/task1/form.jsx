import React, { Component } from 'react';
import './style.css';

class FormComponent extends Component {
  render() {
    return (
        <div className="App">
        <h1 style={{ textAlign: 'center' }}>Form Components</h1>
      <form className="custom-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default FormComponent;
