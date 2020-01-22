/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, {
  useEffect,
  useState,
} from 'react';
import firebase from './useFirebase';

const useDepartments = () => {
  const [users, setQuestions] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    const collectionRef = firebase.firestore().collection('departments')
    const departmentsArr = [];
    const unsubscribe = collectionRef.onSnapshot(
      (snapshot) => {
        snapshot.forEach((department) => {
          departmentsArr.push({ ...department.data(), id: department.id })
        });
        setDepartments(departmentsArr);
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        setError(err);
      },
    );
    return () => unsubscribe();
  }, []);

  //   const getDepartmentUsers = () => {
  //     const collectionRef = firebase.firestore().collection('users').where('department', '==', departmentId)
  //     const usersArr = [];
  //     return collectionRef.get().th

  // }




  return {
    departments,
    loading,
    error,
  }
}
export default useDepartments;