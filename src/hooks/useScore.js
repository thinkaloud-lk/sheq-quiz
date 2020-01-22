import { useState, useContext } from 'react';
import React from 'react';
import useQuestions from './useQuestions'
import firebase from './useFirebase';
import { questions as sampleQuestions } from '../models/mock';
const scoreContext = React.createContext();

const ScoreFunctions = () => {
  const [timesUp, setTimesUp] = useState(false);
  const [user, setUser] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [results, setResults] = useState(null);

  const { questions } = useQuestions()

  const updateAnswers = (questionId, choiceId) => {
    const newAnswers = { ...answers };
    const isCorrect = questions.find(q => q.id === questionId).correctAnswers === choiceId;
    newAnswers[questionId] = { choiceId, isCorrect }
    setAnswers(newAnswers)
  }

  const getFinalResults = () => {
    let resultsArr = [];
    firebase.firestore().collection('departments').get()
      .then(snapshot => snapshot.forEach(doc => {
        const { label, scores } = doc.data();
        const score = scores && (scores.reduce((p, c) => p + c, 0) / scores.length).toFixed(2)
        resultsArr.push({ label, score, totalUsers: scores.length })
      }))
    setResults(resultsArr);
  }

  const updateFinalScore = () => {

  }

  const submitUserAnswers = () => {
    let currentScore = 0;
    Object.keys(answers).map(ans => {
      if (answers[ans].isCorrect) {
        currentScore++;
      }
    })
    setScore(currentScore);
    firebase.firestore().collection('users').doc(user.userId).update({
      score: currentScore,
    })
      .then(() => firebase.firestore().collection('departments').doc(user.department).update({
        scores: firebase.firestore.FieldValue.arrayUnion(currentScore)
      }))
  }

  const setQuestions = () => {
    sampleQuestions.map(q =>
      firebase.firestore().collection('questions').add(q))
  }

  const addNewUser = (department, userName) => {
    firebase.firestore().collection('users').add({
      department,
      name: userName,
      //user created at,
    })
      .then((data) => {
        setUser({ department, name: userName, userId: data.id })
      })
  }

  return {
    user,
    setUser,
    questions,
    setQuestions,
    addNewUser,
    getFinalResults,
    submitUserAnswers,
    results,
    score,
    timesUp,
    setTimesUp,
    updateAnswers,
    answers,
  }
}

export const ScoreProvider = ({ children }) => (
  <scoreContext.Provider value={ScoreFunctions()}>{children}</scoreContext.Provider>
);

export const useScore = () => (
  useContext(scoreContext)
)

