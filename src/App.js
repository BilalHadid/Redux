import React from 'react';
import './App.css';
import {connect} from 'react-redux';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <h1>count value is {props.count.value}</h1>
        <button className="btn-primary" onClick={props.increaseValue}>Increase Value</button>
        <button className='btn-danger' onClick={props.decreaseValue}>Decrease Value</button>
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
  increaseValue: () => dispatch({type:'increse_count'}),
  decreaseValue: () => dispatch({type: 'decrement_count'})
})

export default connect(mapstatetoprops,mapdispatchtoprops)(App);
