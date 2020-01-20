import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Choices from '../Choices';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { questions } from '../../models/mock';

import { useScore } from '../../hooks/useScore';

const Result = ({ }) => {
  const { data, answers } = useScore();

  return (
    <div>
      {
        data.map(question => {
          console.log(answers[question.id])
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