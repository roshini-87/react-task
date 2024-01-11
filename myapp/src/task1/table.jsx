import React, { Component } from 'react';
import './style.css';

class TableComponent extends Component {
  render() {
    return (
        <div className="App">
        <h1 style={{ textAlign: 'center' }}>Table Components</h1>
        <table className="center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    );
  }
}

export default TableComponent;
