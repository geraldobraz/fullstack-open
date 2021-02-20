import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [goodFeedBacks, setGoodFeedBacks] = useState(0)
  const [neutralFeedBacks, setNeutralFeedBacks] = useState(0)
  const [badFeedBacks, setBadFeedBacks] = useState(0)

  const handleGoodFeedback = useCallback(() => {
    setGoodFeedBacks(goodFeedBacks+1);
  }, [goodFeedBacks]);

  const handleNeutralFeedback = useCallback(() => {
    setNeutralFeedBacks(neutralFeedBacks+1);
  }, [neutralFeedBacks]);
  
  const handleBadFeedback = useCallback(() => {
    setBadFeedBacks(badFeedBacks+1);
  }, [badFeedBacks]);
  
  return (
    <div className="App">
      <h1>Give your feedback</h1>

      <div className="buttons-section">
        <button className="good-button" onClick={handleGoodFeedback} >Good</button>
        <button className="neutral-button" onClick={handleNeutralFeedback} >Neutral</button>
        <button className="bad-button" onClick={handleBadFeedback} >Bad</button>
      </div>

      <h2>Statistics</h2>
      <div className="statistics-section">
        <div>
          <label>Good</label> 
          {goodFeedBacks}
        </div>
        <div>
          <label>Neutral</label> 
          {neutralFeedBacks}
        </div>
        <div>
          <label>Bad</label> 
          {badFeedBacks}
        </div>
      </div>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
