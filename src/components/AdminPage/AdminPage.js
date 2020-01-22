import React from 'react';
import Layout from '../Layout';
import Button from '@material-ui/core/Button';
import { useScore } from '../../hooks/useScore';

const AdminPage = () => {
  const { setQuestions, setNewUser } = useScore()
  return (
    <Layout>
      <Button onClick={() => setQuestions()} >Submit</Button>
      <Button onClick={() => setNewUser()} >New User</Button>
    </Layout>
  )
}

export default AdminPage;