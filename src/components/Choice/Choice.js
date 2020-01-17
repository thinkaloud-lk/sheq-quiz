import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import { useScore } from '../../hooks/useScore';

const Choice = ({ choice, questionId }) => {
  const { label, id, isCorrect } = choice;
  const { score, scoreUp, updateAnswers } = useScore();
  return (
    <Button variant="text" style={{ width: '100%' }} onClick={() => updateAnswers({ questionId: questionId, id })}>
      <Checkbox
        value="checkedB"
        color="primary"
      />
      <Typography variant="p" align="left" >{label}</Typography>
      {
        isCorrect && <Typography variant="p" align="left" >correct answer</Typography>
      }
    </Button>
  )
}

export default Choice;
