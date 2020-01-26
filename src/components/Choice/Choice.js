import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import { useScore } from '../../hooks/useScore';

const Choice = ({ choice, questionId }) => {
  const { label, id } = choice;
  const { user, setUser, answers, updateAnswers } = useScore();
  const givenAnswer = answers[questionId] && answers[questionId].choiceId;

  return (
    <div style={{ marginBottom: 10, width: '100%' }}>
      <Button
        fullWidth
        variant="contained" style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', backgroundColor: (givenAnswer === id) ? '#009688' : '#eceff1' }}
        onClick={() => updateAnswers(questionId, id)}
      >
        <Checkbox
          color={(givenAnswer === id) ? '#388e3c' : "#313245 "}
          checked={(givenAnswer === id)}
        />
        <Typography variant="body1" align="left" style={{ textTransform: 'lowercase', color: (givenAnswer === id) ? 'white' : "#455a64" }} >{label}</Typography>
      </Button>
    </div >

  )
}

export default Choice;
