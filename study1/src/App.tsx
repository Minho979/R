import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let persons = [
    {name: 'Ann', age: 16},
    {name: 'Jane', age: 18},
    {name: 'John', age: 20}
  ];

  let trlist = persons.map(person =>
    <tr><td>{person.name}</td><td>{person.age}</td></tr>
    );

  return 
  <table>
    <tr><td>이름</td><td>나이</td></tr>
    {trlist}
  </table>;;
}

export default App;
