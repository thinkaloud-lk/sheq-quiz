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
  return (
    <div>
      {
        questions.map(question => {
          return (
            <Button
              variant="text" style={{ width: '100%', backgroundColor: answers[question.id] && answers[question.id].isCorrect ? '#009688' : 'red' }}
              onClick={() => { }}
            >
              <Typography variant="p" align="left" >{question.id}</Typography>
            </Button>
          )
        })}
      }
    </div >
  )
}

export default Result;