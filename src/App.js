import React, {Component} from 'react'
import Greet from './components/Greet.js'
import './App.css';
import Welcome from './components/welcome'
class App extends Component{

render(){
  return (
    <div className="App">
      <Greet/>
    
      <Welcome/>
      </div>
    
  )
}
};

export default App;
