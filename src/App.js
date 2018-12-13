import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drawboard from 'drawboard';
import { connect } from 'react-redux';
import { getCounter } from './axion/selectors/counter';

import {incrementCounter} from './axion/actions/counter';



class App extends Component {

  constructor(props) {
    super(props)
    this.cuenta = this.cuenta.bind(this)
    this.message = 'has you'
}


  cuenta =()=>{

      
      this.props.incrementCounter(this.message);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>     
            Learn React
        </header>
        <a onClick={()=>this.cuenta()} >total:{this.props.counter}</a>
         <Drawboard />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
     counter:getCounter(state)
  }
}

const mapDispatchToProps = dispatch => {
  
    return {
      incrementCounter: (message) => {
          dispatch(incrementCounter(message))
      }
  
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
