import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Choices from '../Choices';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import { useScore } from '../../hooks/useScore';

const UserDetails = ({ question, selectedDepartment, selectedName }) => {
  const { id, choices, label, type } = question;
  const { user, setUser, department, setDepartment } = useScore();
  return (
    <div>
      <Typography variant="h6" style={{ color: 'white' }}>
        {label}
      </Typography>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', flex: 1, marginTop: 20 }}
      >
        {
          choices.map((choice) => (
            <Button
              variant="text" style={{ width: '100%', backgroundColor: (type === 'department' ? selectedDepartment === choice.id : selectedName === choice.id) ? '#009688' : '' }}
              onClick={() => setUser({ ...user, [type]: choice.id })}
            >
              <Typography variant="p" align="left" >{choice.label}</Typography>
            </Button>
          ))
        }
      </div>
    </div >
  )
}

export default UserDetails;