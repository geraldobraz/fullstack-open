import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      greetings app created by <a href="https://github.com/geraldobraz">geraldobraz</a>
    </div>
  );
}


const App = () => {
  const name = 'Geraldo';
  const age = 25;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age}/>
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
