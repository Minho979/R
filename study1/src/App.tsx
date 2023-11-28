import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let s1 = {color: "blue", fontSize: "20px"}
  let s2 = {color: "green", fontSize: "25px"}
  return (
    <div>
      <p style={s1}>hello world</p>
      <p style={s2}>안녕하세요</p>
    </div>
  );
}

export default App;
