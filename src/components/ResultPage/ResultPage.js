import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

import Layout from '../../components/Layout';
import Result from '../../components/Result';
import { useScore } from '../../hooks/useScore';
const ResultPage = ({ history }) => {
  const { checkAnswers } = useScore();
  const [showResults, setShowResults] = useState(false)
  return (
    <Layout>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        {
          showResults && <Result />
        }
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button size="large" fullWidth variant="contained" onClick={() => history.goBack()} color='white' >
            Back
      </Button>
          <Button size="large" fullWidth variant="contained" onClick={() => setShowResults(true)} color='white' >
            Ok
      </Button>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(ResultPage);