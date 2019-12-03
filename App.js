import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './parentComponent';


const App = () =>{
  return (
    <div className="App">
      <ParentComponent/>
    </div>
  );
}

export default App;
