import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {increase_value , decrease_value} from './store/action/countAction.js'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <h1>count value is {props.count.value}</h1>
        <button className="btn-primary" onClick={() => props.increaseValue(10)}>Increase Value</button>
        <button className='btn-danger' onClick={() => props.decreaseValue(2)}>Decrease Value</button>
      </header>
    </div>
  );
}
const mapstatetoprops = (state) => {
    return{
      count : state.count
    }
}
const mapdispatchtoprops = (dispatch) => ({
  increaseValue: (value) => dispatch(increase_value(value)),
  decreaseValue: (value) => dispatch(decrease_value(value))
})

export default connect(mapstatetoprops,mapdispatchtoprops)(App);
