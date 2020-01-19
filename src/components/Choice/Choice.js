import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import { useScore } from '../../hooks/useScore';

const Choice = ({ choice, questionId }) => {
  const { label, id, isCorrect } = choice;
  const { score, scoreUp, answers, updateAnswers } = useScore();
  const givenAnswer = answers[questionId] && answers[questionId].choiceId;

  return (
    <Button
      variant="text" style={{ width: '100%', backgroundColor: (givenAnswer === id) ? '#009688' : '' }}
      onClick={() => updateAnswers(questionId, id)}
    >
      <Checkbox
        checked={givenAnswer === id}
        value="checkedB"
        color="#00695c"
      />
      <Typography variant="p" align="left" >{label}</Typography>
    </Button>
  )
}

export default Choice;
