import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Layout from '../../components/Layout';
import Result from '../../components/Result';
import { useScore } from '../../hooks/useScore';
import useQuestions from '../../hooks/useQuestions';

const ResultPage = ({ history }) => {

  const { score, timesUp } = useScore();
  const { questions, error, loading } = useQuestions()
  return (
    <Layout>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {
          timesUp && <Typography variant="h5" align="center" style={{ color: '#1b5e20' }}>Your answers submitted automatically</Typography>
        }
        {
          questions && <Typography variant="h5" align="center" style={{ color: '#1b5e20' }}>Your score <Typography variant='h1'>{score}</Typography>  out of {questions.length}</Typography>
        }
        <Button
          size="large"
          variant="contained"
          style={{ width: '80%', alignSelf: 'center', color: 'white', marginBottom: 20, backgroundColor: '#f57f17' }}
          onClick={() => history.push('/winner')} color='white' >
          Who has won?
              </Button>
      </div>
    </Layout >
  );
}

export default withRouter(ResultPage);