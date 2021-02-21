import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statistic = ({ text, value, isPercentage=false }) => {
  return (
    <tr>
      <td>
        <label>{text}</label> 
      </td>
      <td>
        {value} {isPercentage && '%'}
      </td>      
    </tr>
  );
};

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
      {feedbacksQuantity > 0 ? (
        <table>
          <tbody>
            <Statistic text="Good" value={goodFeedbacks} />
            <Statistic text="Neutral" value={neutralFeedbacks} />
            <Statistic text="Bad" value={badFeedbacks} />
            <Statistic text="All" value={feedbacksQuantity} />
            <Statistic text="Average" value={average} />
            <Statistic text="Positive" value={positive} isPercentage/>
          </tbody>
        </table>
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
};

const Button = ({ onClick, customClass, text }) => (<button className={customClass} onClick={onClick} >{text}</button>);

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
        <Button customClass="good-button" onClick={handleGoodFeedback} text="Good" />
        <Button customClass="neutral-button" onClick={handleNeutralFeedback} text="Neutral" />
        <Button customClass="bad-button" onClick={handleBadFeedback} text="Bad" />
      </div>

      <Statistics 
        goodFeedbacks={goodFeedbacks}
        neutralFeedbacks={neutralFeedbacks}
        badFeedbacks={badFeedbacks}
      />

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
