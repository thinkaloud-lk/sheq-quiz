import { useState, useContext } from 'react';
import React from 'react';
import { questions } from '../models/mock';
const scoreContext = React.createContext();

const ScoreFunctions = () => {
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0);
  const scoreUp = () => {
    setScore(score + 1);
  }
  const scoreDown = () => {
    setScore(score - 1);
  }
  const updateAnswers = (answer) => {
    setAnswers([...answers, answer])
  }
  return {
    score,
    scoreUp,
    scoreDown,
    answers,
    updateAnswers,
  }

}

export const ScoreProvider = ({ children }) => (
  <scoreContext.Provider value={ScoreFunctions()}>{children}</scoreContext.Provider>
);

export const useScore = () => (
  useContext(scoreContext)
)

