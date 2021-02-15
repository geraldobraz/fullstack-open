import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Total from './components/Total/Total';
import './index.css';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
  ];
  
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
