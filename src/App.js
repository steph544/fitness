import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from "./Home.js"

class App extends React.Component {
  state ={
    loggedIn: true, 
    view: null 
  }
render(){
  return(
    <div>
      <Home/>
    </div>
  )
}
}

export default App;
