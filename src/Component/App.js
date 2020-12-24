import React from 'react';
import '../CSS/App.css';
import logo from '../logo.png';
import Home from '../Component/Home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" className="logo"/>
      </header>
      <Home />  
    </div>
  );
}

export default App;
