import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {increase_value , decrease_value} from './store/action/countAction.js'
import {getPostMiddlewares} from './store/Middlewares/postMiddlewares.js'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <h1>count value is {props.count.value}</h1>
        <p>
        <button className="btn-primary" onClick={() => props.increaseValue(10)}>Increase Value</button>
        </p>
        <p>
        <button className='btn-danger' onClick={() => props.decreaseValue(2)}>Decrease Value</button>
        </p>
        
        <hr></hr> 
        
        <h1>POST</h1>
        <div>
          {props.post.data? <div>{props.post.data.title}</div>:<div>There is no Post</div>}
          <small>
            {props.post.error && props.post.error}
          </small>
        <p>
          <button onClick={props.getPost}>Get Post</button>
        </p>
        </div>
       

      </header>
    </div>
  );
}
const mapstatetoprops = (state) => {
    return{
      count : state.count,
      post: state.post
    }
}
const mapdispatchtoprops = (dispatch) => ({
  increaseValue: (value) => dispatch(increase_value(value)),
  decreaseValue: (value) => dispatch(decrease_value(value)),
  getPost: () => dispatch(getPostMiddlewares())
})

export default connect(mapstatetoprops,mapdispatchtoprops)(App);
