import firebase from './useFirebase';
import { questions } from '../models/mock'
export const getFirestoreCollection = (collection, setData, setLoading, setError) => {
  firebase.firestore().collection(collection).onSnapshot(
    (snapshot) => {
      const dataArr = [];
      snapshot.forEach((doc) => {
        dataArr.push({ ...doc.data(), id: doc.id });
      });
      setLoading(false);
      setData(dataArr);
    },
    (err) => {
      setLoading(false);
      setError(err);
    },
  );
};

export const getFirestoreSubCollection = (collection, document, subCollection) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = firebase.firestore().collection(collection).doc(document).collection(subCollection).onSnapshot(
      (snapshot) => {
        const dataArr = [];
        snapshot.forEach((doc) => {
          dataArr.push({ ...doc.data(), id: doc.id });
        });
        setLoading(false);
        setData(dataArr);
      },
      (err) => {
        setLoading(false);
        setError(err);
      },
    );
    return () => unsubscribe();
  }, []);
  return {
    data,
    error,
    loading,
  };
};