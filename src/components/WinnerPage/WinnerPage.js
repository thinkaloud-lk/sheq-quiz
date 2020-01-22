import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

import Layout from '../../components/Layout';
import Result from '../../components/Result';
import { useScore } from '../../hooks/useScore';
import firebase from '../../hooks/useFirebase';

const WinnerPage = ({ history }) => {
  const { getFinalResults, results } = useScore();
  console.log(results)
  return (
    <Layout>
      <Button onClick={() => getFinalResults()}>get results</Button>
    </Layout >
  );
}

export default withRouter(WinnerPage);