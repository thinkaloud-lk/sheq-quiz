import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

import Layout from '../../components/Layout';
import Result from '../../components/Result';
import { useScore } from '../../hooks/useScore';
import firebase from '../../hooks/useFirebase';

const ResultPage = ({ history }) => {
  const { checkAnswers, submitUserAnswers } = useScore();
  const [showResults, setShowResults] = useState(false)
  return (
    <Layout>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', width: '100%' }}>
        {
          showResults &&
          <div>
            <Result />
            <Button
              size="large"
              variant="contained"
              style={{ width: '100%', alignSelf: 'center', color: 'white', marginBottom: 20, backgroundColor: '#f57f17' }}
              onClick={() => history.push('/winner')} color='white' >
              Who has won?
              </Button>
          </div>

        }
        {
          !showResults && (
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', }}>
              <Button
                size="large"
                variant="contained"
                style={{ width: '100%', alignSelf: 'center', color: 'white', marginBottom: 20, backgroundColor: '#f57f17' }}
                onClick={() => history.goBack()} color='white' >
                Go Back
              </Button>
              <Button
                size="large"
                variant="contained"
                style={{ width: '100%', alignSelf: 'center', color: 'white', marginBottom: 20, backgroundColor: '#f57f17' }}
                onClick={() => {
                  submitUserAnswers()
                  setShowResults(true);
                }
                } color='white' >
                Submit
              </Button>
            </div>
          )
        }

      </div>
    </Layout >
  );
}

export default withRouter(ResultPage);