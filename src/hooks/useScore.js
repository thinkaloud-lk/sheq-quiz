import { useState, useContext } from 'react';
import React from 'react';
import { questions } from '../models/mock';
import { useFirestoreCollection } from './useFirestore';

const scoreContext = React.createContext();

const ScoreFunctions = () => {
  const [timesUp, setTimesUp] = useState(false);
  const [user, setUser] = useState(null);
  const [answers, setAnswers] = useState({});
  const [unAnswered, setUnanswered] = useState(questions.length);
  const [score, setScore] = useState(0);

  const { data, loading } = useFirestoreCollection('questions')

  const updateAnswers = (questionId, choiceId) => {
    const newAnswers = { ...answers };
    const isCorrect = data.find(q => q.id === questionId).correctAnswers === choiceId;
    newAnswers[questionId] = { choiceId, isCorrect }
    setAnswers(newAnswers)
    updateUnanswered()
  }

  const updateUnanswered = () => {
    const newUnAnswered = data.length - Object.keys(answers);
    setUnanswered(newUnAnswered);
  }

  const checkAnswers = () => {
    let currentScore = 0;
    Object.keys(answers).map(ans => {
      if (answers[ans].isCorrect) {
        currentScore++;
      }
    })
    setScore(currentScore);
  }
  return {
    user,
    setUser,
    score,
    data,
    timesUp,
    setTimesUp,
    answers,
    unAnswered,
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

