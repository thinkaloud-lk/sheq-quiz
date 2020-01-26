import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Choices from '../Choices';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import useQuestions from '../../hooks/useQuestions';

import { useScore } from '../../hooks/useScore';

const Result = ({ }) => {
  const { answers } = useScore();
  const { questions, loading } = useQuestions();
  const { score } = useScore();
  return (
    <div>
      <Typography variant="h6" align="center" style={{ color: '#1b5e20' }}>Your score {score}</Typography>
    </div >
  )
}

export default Result;