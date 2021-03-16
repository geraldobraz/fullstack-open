import React from 'react';

const Total = ({parts}) => {
  const total = parts.reduce((acc, num) => acc + num.exercises, 0);
  
  return (
    <strong>Number of exercises {total}</strong>
  )
};

export default Total;
