import React from 'react';
//import Button from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button type="connect">Connect</button>
      </header>
    
      <script>
      document.getElementById('connect').addEventListener('pointerup', function(event) {
        navigator.bluetooth.requestDevice
      });
      </script>
    </div>
  );
}



export default App;
