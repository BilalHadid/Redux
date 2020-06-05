import React from 'react';
import './App.css';
import {connect} from 'react-redux';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <h1>count value is {props.count.value}</h1>
      </header>
    </div>
  );
}
const mapstatetoprops = (state) => {
    return{
      count : state.count
    }
}

export default connect(mapstatetoprops)(App);
