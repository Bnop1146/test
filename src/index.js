import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



//create a React component
const App = () => {
  return <div className='BTN'>
    <p className='BTN-text'>
      Hello World!
    </p>
  </div>
}

//Render the React component in the browser
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)


