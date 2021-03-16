import React from 'react';

const Total = ({parts}) => {
  const total = parts.reduce((acc, num) => acc + num.exercises, 0);
  
  return (
    <p>Number of exercises {total}</p>
  )
};

export default Total;
