import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Choice from '../Choice'

const Answers = ({ choices, questionId }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', flex: 1, marginTop: 20 }}
    >
      {
        choices.map((choice) => (
          <Choice key={choice.id} choice={choice} questionId={questionId} />
        ))
      }
    </div>
  )
}

export default Answers;
