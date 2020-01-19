import { useState, useContext } from 'react';
import React from 'react';
import { questions } from '../models/mock';
const scoreContext = React.createContext();

const ScoreFunctions = () => {
  const [answers, setAnswers] = useState({})
  //const [score, setScore] = useState(0);

  const updateAnswers = (questionId, choiceId) => {
    const newAnswers = { ...answers };
    const isCorrect = questions.find(q => q.id === questionId).correctAnswers === choiceId;
    newAnswers[questionId] = { choiceId, isCorrect }
    setAnswers(newAnswers)
  }
  let score = 0;

  const checkAnswers = () => {
    Object.keys(answers).map(ans => {
      if (answers[ans].isCorrect) {
        score++;
      }
    })
    console.log(score)
    setAnswers({})
  }
  return {
    score,
    answers,
    updateAnswers,
    checkAnswers
  }

}

export const ScoreProvider = ({ children }) => (
  <scoreContext.Provider value={ScoreFunctions()}>{children}</scoreContext.Provider>
);

export const useScore = () => (
  useContext(scoreContext)
)

