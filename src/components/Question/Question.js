import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Choices from '../Choices';

const Question = ({ question }) => {
  const { id, choices, label } = question;
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h6" align="center" style={{ color: '#1b5e20' }}>
        {label}
      </Typography>
      <Choices choices={choices} questionId={id} />
    </div>
  )
}

export default Question;