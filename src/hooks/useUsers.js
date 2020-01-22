/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, {
  useEffect,
  useState,
} from 'react';
import firebase from './useFirebase';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const collectionRef = firebase.firestore().collection('users')
    const usersArr = [];
    const unsubscribe = collectionRef.onSnapshot(
      (snapshot) => {
        snapshot.forEach((user) => {
          usersArr.push({ ...user.data(), id: user.id })
        });
        setUsers(usersArr);
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
    users,
    loading,
    error,
  }
}
export default useUsers;