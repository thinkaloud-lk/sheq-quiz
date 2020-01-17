import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Choices from '../Choices';

const Question = ({ question }) => {
  const { id, choices, label } = question;
  const [isCorrect, setIsCorrect] = useState(false);
  return (
    <div>
      <Typography variant="h6" style={{ color: 'white' }}>
        {label}
      </Typography>
      <Choices choices={choices} questionId={id} />
    </div>
  )
}

export default Question;