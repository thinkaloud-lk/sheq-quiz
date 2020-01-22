import React, { useState } from 'react';

import Choice from '../Choice'

const choices = ({ choices, questionId }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginTop: 20 }}
    >
      {
        choices && choices.map((choice) => {
          return (
            <Choice key={choice.id} choice={choice} questionId={questionId} />
          )
        })
      }
    </div>
  )
}

export default choices;
