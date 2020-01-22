/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, {
  useEffect,
  useState,
} from 'react';
import firebase from './useFirebase';

const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    const collectionRef = firebase.firestore().collection('questions')
    const questionsArr = [];
    const unsubscribe = collectionRef.onSnapshot(
      (snapshot) => {
        snapshot.forEach((question) => {
          questionsArr.push({ ...question.data(), id: question.id })
        });
        setQuestions(questionsArr);
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        setError(err);
      },
    );
    return () => unsubscribe();
  }, []);

  return {
    questions,
    loading,
    error,
  }
}
export default useQuestions;