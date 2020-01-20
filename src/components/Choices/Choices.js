import React, { useState } from 'react';

import Choice from '../Choice'

const choices = ({ choices, questionId }) => {
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

export default choices;
