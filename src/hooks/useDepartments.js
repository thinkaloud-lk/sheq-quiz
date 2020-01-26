/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, {
  useEffect,
  useState,
} from 'react';
import firebase from './useFirebase';

const useDepartments = () => {
  const [departments, setDepartments] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentUser, setCurrentUser] = useState(false);

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

  const getDepartmentUsers = (departmentId) => {
    const collectionRef = firebase.firestore().collection('users').where('department', '==', departmentId)
    const usersArr = [];
    return collectionRef.get()
  }

  return {
    departments,
    loading,
    getDepartmentUsers,
    error,
  }
}
export default useDepartments;