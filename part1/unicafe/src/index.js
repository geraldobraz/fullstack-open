import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statistics = ({
  goodFeedbacks,
  neutralFeedbacks,
  badFeedbacks,
}) => {
  const [feedbacksQuantity, setFeedbacksQuantity] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    const quantity = goodFeedbacks + neutralFeedbacks + badFeedbacks;
    const average = quantity/3;
    const positive = quantity ? 100 * (goodFeedbacks/quantity) : 0;

    setFeedbacksQuantity(quantity);
    setAverage(average);
    setPositive(positive);

  }, [goodFeedbacks, neutralFeedbacks, badFeedbacks]);

  return (
    <>
      <h2>Statistics</h2>
      <div className="statistics-section">
      {feedbacksQuantity > 0  ? (
        <>
          <div>
            <label>Good</label> 
            {goodFeedbacks}
          </div>
          <div>
            <label>Neutral</label> 
            {neutralFeedbacks}
          </div>
          <div>
            <label>Bad</label> 
            {badFeedbacks}
          </div>
          <div>
            <label>All</label> 
            {feedbacksQuantity}
          </div>
          <div>
            <label>Average</label> 
            {average}
          </div>
          <div>
            <label>Positive</label> 
            {positive} %
          </div>
        </>
      ) :
      (
        <div>
          No feedback given
        </div>
      )
      }
      </div>
    </>
  );
}

const App = () => {
  const [goodFeedbacks, setGoodFeedbacks] = useState(0);
  const [neutralFeedbacks, setNeutralFeedbacks] = useState(0);
  const [badFeedbacks, setBadFeedbacks] = useState(0);

  const handleGoodFeedback = useCallback(() => {
    setGoodFeedbacks(goodFeedbacks+1);
  }, [goodFeedbacks]);

  const handleNeutralFeedback = useCallback(() => {
    setNeutralFeedbacks(neutralFeedbacks+1);
  }, [neutralFeedbacks]);
  
  const handleBadFeedback = useCallback(() => {
    setBadFeedbacks(badFeedbacks+1);
  }, [badFeedbacks]);


  return (
    <div className="App">
      <h1>Give your feedback</h1>

      <div className="buttons-section">
        <button className="good-button" onClick={handleGoodFeedback} >Good</button>
        <button className="neutral-button" onClick={handleNeutralFeedback} >Neutral</button>
        <button className="bad-button" onClick={handleBadFeedback} >Bad</button>
      </div>

      <Statistics 
        goodFeedbacks={goodFeedbacks}
        neutralFeedbacks={neutralFeedbacks}
        badFeedbacks={badFeedbacks}
      />

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
