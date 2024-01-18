import React from 'react';
import './json.css';
const DataList = () => {
  const data = [
    { name: 'Name1', department: 'Engg', dob: '18/12/2000' },
    { name: 'Name2', department: 'Engg', dob: '18/12/2000' },
    { name: 'Name3', department: 'Engg', dob: '18/12/2000' },
    { name: 'Name4', department: 'Engg', dob: '18/12/2000' },
    { name: 'Name5', department: 'Engg', dob: '18/12/2000' }
  ];

  return (
    <table className="json">
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.department}</td>
            <td>{item.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataList;
