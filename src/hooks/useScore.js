import { useState, useContext } from 'react';
import React from 'react';
import useQuestions from './useQuestions'
import firebase from './useFirebase';
import { finalQuestions as sampleQuestions, departments, users } from '../models/mock';
import { useQuiz } from './useQuiz'

const scoreContext = React.createContext();
const ScoreFunctions = () => {
  const [timesUp, setTimesUp] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const { questions } = useQuestions()
  const { quizId } = useQuiz();

  const updateAnswers = (questionId, choiceId) => {
    const newAnswers = { ...answers };
    const isCorrect = questions.find(q => q.id === questionId).correctAnswers === choiceId;
    newAnswers[questionId] = { choiceId, isCorrect }
    setAnswers(newAnswers)
  }

  const getFinalResults = () => {
    let resultsArr = [];
    firebase.firestore().collection('departments').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const { id, label, score, totalUsers, totalParticipated } = doc.data();
          resultsArr.push({ id, label, score, userUtil: (totalParticipated / totalUsers).toFixed(2) })
        })
      })
      .then(() => {
        let winningDept;
        const scores = resultsArr.map(r => r.score);
        const highestScore = Math.max(...scores);
        const deptsWithHighScores = resultsArr.filter(r => r.score === highestScore)
        if (deptsWithHighScores.length > 1) {
          winningDept = deptsWithHighScores.reduce((prev, current) => prev.userUtil > current.userUtil ? prev : current)
        } else {
          winningDept = deptsWithHighScores[0]
        }
        firebase.firestore().collection('quizes').doc(quizId).update({
          winningDept
        })
      })
  }

  const submitUserAnswers = () => {
    let currentScore = 0;
    Object.keys(answers).map(ans => {
      if (answers[ans].isCorrect) {
        currentScore++;
      }
    })
    setScore(currentScore);
    const deptRef = firebase.firestore().collection('departments').doc(currentUser.department)
    deptRef.get()
      .then(doc => {
        const deptScore = doc.data().score;
        const deptParticipated = doc.data().totalParticipated
        deptRef.update({
          score: deptScore + currentScore,
          totalParticipated: deptParticipated + 1,
        })
      })
      .then(() => firebase.firestore().collection('users').doc(currentUser.userId).update({
        score: currentScore,
        status: 'COMPLETED',
        completedAt: new Date().toISOString()
      }))
      .finally(() => { setCurrentUser(null) })
      .catch(err => console.log(err))
  }

  const setQuestions = () => {
    sampleQuestions.map(q =>
      firebase.firestore().collection('questions').add(q))
  }

  const setUsers = () => {
    users.map(u =>
      firebase.firestore().collection('users').add(u))
  }

  const setDepartments = () => {
    departments.map(d =>
      firebase.firestore().collection('departments').doc(d.id).set({
        ...d
      }))
  }

  const loginUser = (userId, name, department) => {
    const userRef = firebase.firestore().collection('users').doc(userId);
    userRef.update({
      loggedIn: new Date().toISOString(),
    })
      .then(() => setCurrentUser({ userId, name, department }))
  }

  const startQuiz = (userId) => {
    firebase.firestore().collection('users').doc(userId).update({
      startedAt: new Date().toISOString(),
      status: 'STARTED'
    })
  }

  return {
    currentUser,
    setCurrentUser,
    questions,
    setQuestions,
    setDepartments,
    setUsers,
    loginUser,
    setAnswers,
    startQuiz,
    getFinalResults,
    submitUserAnswers,
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

