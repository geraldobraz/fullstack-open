import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const App = () => {
  const [index, setIndex] = useState(0);
  const [anecdote, setAnecdote] = useState(anecdotes[index]);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [mostVoted, setMostVoted] = useState({ anecdote: '', votes: 0 });
  

  const handleNextAnecdote = useCallback(() => {
    const index = Math.floor((Math.random() * anecdotes.length));
    setIndex(index);
    setAnecdote(anecdotes[index]);
  }, []);

  const handleAnecdoteVote = useCallback(() => {
    const newPoints = { [index]: points[index]++ }
    setPoints({ ...points, newPoints })
  }, [index, points]);

  useEffect(() => {
    const votes = points[index];
    if (votes > mostVoted.votes) {
      const value = { anecdote: anecdote, votes: votes };
      setMostVoted(value);
    }

  }, [anecdote, index, mostVoted.votes, points]);

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdote}</p>
      <p>Has {points[index]}</p>
      <button onClick={handleAnecdoteVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{mostVoted.anecdote}</p>
      <p>Has {mostVoted.votes}</p>
    </>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
