import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import NameForm from './components/NameForm.jsx';
import EssayForm from './components/Essay.jsx';
import Calculator from './components/Calculator.jsx';

var data = {
  name : "Poin",
  age : 21
}

const element =
  <div style={{textAlign:'center'}}>
    <h1>Hello {data.name} {data.age}</h1>
    <Calculator />
  </div>

ReactDOM.render(
  //<App data = {data />
  element,
  document.getElementById('root')
);
