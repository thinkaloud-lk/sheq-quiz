import { useState, useEffect, useContext } from 'react';
import React from 'react';
import firebase from './useFirebase';

const quizContext = React.createContext();

const QuizFunctions = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");
  const [quizId, setQuizId] = useState(null);
  const [winningDept, setWinningDept] = useState(null);

  // here take only one quiz. if there is more store the 'status' with quiz document id
  useEffect(() => {
    const quizesRef = firebase.firestore().collection('quizes')
    const unsubscribe = quizesRef.where("index", "==", 1).limit(1).onSnapshot(
      (snapshot) => {
        const { status, winningDept } = snapshot.docs[0].data();
        const id = snapshot.docs[0].id;
        setStatus(status)
        setQuizId(id)
        setWinningDept(winningDept)
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        setError(err);
      },
    );
    return () => unsubscribe();
  }, []);


  const changeStatus = (newStatus) => {
    firebase.firestore().collection('quizes').doc(quizId).update({
      status: newStatus,
    })
      .then(() => { })
  }

  return {
    status,
    quizId,
    winningDept,
    changeStatus,
    loading,
    error,
  }
}

export const QuizProvider = ({ children }) => (
  <quizContext.Provider value={QuizFunctions()}>{children}</quizContext.Provider>
);

export const useQuiz = () => (
  useContext(quizContext)
)

