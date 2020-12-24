import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import FontAwasome from 'react-fontawesome';
import './App.css';
import Home from '../components/Home';

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state={
     open:false,
     toggleIcon:true
   }
 }
 changeDisplay = () =>{
  this.setState(prevState =>(
    {
      open : !prevState.open
    }
  ));
 }
  toggleIBurgerIcon = () =>{
    this.setState(
      {
        toggleIcon : !this.state.toggleIcon
      }
    );
  //  document.getElementsByClassName('header-title').style.display = 'none';
  }
render()
 {
  return (
    <Router>
    <div className="container">
      <div className="header">
        <a href="/" className="header-title" style={{ display: this.state.toggleIcon? "" : "none" }}>News Portal</a>
        <ul className="header-menu" style={{ display: this.state.toggleIcon? "" : "block" }}>
          <li className="item"><Link to="/" className="link">All Feed</Link></li>
          <li className="item handle-view">Top Headlines
          <FontAwasome className="fas fa-chevron-down" style={{paddingLeft:"5px"}} onClick={this.changeDisplay}/>
            {this.state.open?<ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/us" className="link1" onClick={this.changeDisplay}>
                    Top headlines in the US</Link></li>
                <li className="sub-menu-item">
                  <Link to="/bbc" className="link1" onClick={this.changeDisplay}>
                    Top headlines from BBC News</Link></li>
                <li className="sub-menu-item">
                  <Link to="/germen" className="link1" onClick={this.changeDisplay}>
                    Top business headlines from Germany</Link></li>
                <li className="sub-menu-item">
                  <Link to="/trump" className="link1" onClick={this.changeDisplay}>
                    Top headlines about Trump</Link></li>
            </ul> : <></>
            }                 
          </li>
          <li className="item">About Us</li>
        </ul>
        <div onClick={this.toggleIBurgerIcon}>
          {this.state.toggleIcon?
          <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          </div>:<div className="burger1" onClick={this.toggleIBurgerIcon}>
          <p className="cross">X</p>
          </div>          
          }
        </div>
      </div>
      <div>
        <Home />
      </div>
    </div>
    </Router>
    
  );
 }
}

export default App;
