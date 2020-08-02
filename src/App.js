import React from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions';



function App({ increment, decrement, count }) {

  return (
    <div className="App">
      <button onClick={() => {
        increment()
      }}>+</button>
      <button onClick={() => {
        decrement()
      }}>-</button>

      {count >5?new Error("Crashed"):count}

    </div>
  );
}

const mapStateToProps = (state) => {
  
  return {
    count: state.reducer.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increment,
    decrement
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
