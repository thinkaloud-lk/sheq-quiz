import React, { useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import ReactCountdownClock from 'react-countdown-clock';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useScore } from '../../hooks/useScore';

import Layout from '../Layout';

const QuizIntroPage = ({ history }) => {
  const { addNewUser, user } = useScore();
  console.log('current user', user)
  return (
    <Layout>
      {
        user && (
          <Typography variant="h6" align="center" style={{ color: '#1b5e20' }}>Welcome {user.name} </Typography>
        )
      }
      <Typography variant="h5" align="center" style={{ color: '#1b5e20' }}>You will get exactly 10min </Typography>
      <Typography variant="h5" align="center" style={{ color: '#1b5e20' }}>Do not refresh the web page</Typography>
      <Typography variant="h5" align="center" style={{ color: '#1b5e20' }}>Please complete before 10.30 am</Typography>
      <Button size="large"
        fullWidth
        variant="contained"
        style={{ width: '80%', alignSelf: 'center', color: 'white', marginBottom: 20, backgroundColor: '#f57f17' }}
        onClick={() => {
          history.push("/quiz")
        }}
        color='white' >
        Let's Go
          </Button>
    </Layout>
  );
}

export default withRouter(QuizIntroPage);