import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Choices from '../Choices';
const Question = ({ question }) => {
  const { id, choices, label, type, subLabels } = question;
  return (
    <div style={{ width: '90%', maxHeight: '90%', overflowY: 'scroll', }}>
      {type === 'PARA' ? (
        <div >
          <Typography variant="h6" align="center" style={{ color: '#1b5e20' }}>
            {label}
          </Typography>
          {
            subLabels && subLabels.map(l => <Typography variant="subtitle1" align="left" style={{ color: '#1b5e20', marginLeft: 20 }}>{l.subLabel}</Typography>)
          }
        </div>
      ) : (
          <Typography variant="h6" align="center" style={{ color: '#1b5e20' }}>
            {label}
          </Typography>
        )
      }
      <Choices choices={choices} questionId={id} />
    </div>
  )
}

export default Question;