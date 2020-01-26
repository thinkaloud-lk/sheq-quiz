import React, { useState } from 'react';
import Layout from '../Layout';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { useScore } from '../../hooks/useScore';
import { finalQuestions } from '../../models/mock'

import { useQuiz } from '../../hooks/useQuiz';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(6),
  },
}));

const AdminPage = () => {
  const { setQuestions, setDepartments, setUsers, getFinalResults } = useScore()
  const { status: currentStatus, changeStatus } = useQuiz();

  return (
    <Layout>
      <div style={{ marginTop: 20, display: 'flex', width: '60%', flexDirection: 'column' }}>
        {
          currentStatus && <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginTop: 20 }}
          >
            <div style={{ marginBottom: 10, width: '100%' }}>
              <Button
                variant="contained"
                style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', backgroundColor: '#009688' }}
                onClick={() => changeStatus("ONGOING")}
              >
                <Typography variant="body1" align="left" style={{ color: (true) ? 'white' : "#455a64" }}  >Start Quiz</Typography>
              </Button>
              <Button
                variant="contained"
                style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginTop: 20, backgroundColor: '#009688' }}
                onClick={() => changeStatus("COMPLETED")}
              >
                <Typography variant="body1" align="left" style={{ color: (true) ? 'white' : "#455a64" }}  >End Quiz </Typography>
              </Button>
            </div>
            {currentStatus && <Typography variant="h6" align="center" style={{ color: '#1b5e20' }}> Quiz Is {currentStatus} </Typography>}
          </div>
        }

        {
          currentStatus === "COMPLETED" && (
            <div style={{ marginTop: 20, width: '100%' }}>
              <Button
                size="large"
                fullWidth
                variant="contained"
                style={{ width: '100%', alignSelf: 'center', color: 'white', marginBottom: 20, backgroundColor: '#f57f17' }}
                onClick={() => getFinalResults()}
                color='white'
              >
                Release results
            </Button>
            </div>
          )
        }
        <Button onClick={() => setQuestions()} >Add questions</Button>
        <Button onClick={() => setDepartments()} >Set Departments</Button>
        <Button onClick={() => setUsers()} >Set Users</Button>
      </div>
    </Layout>
  )
}

export default AdminPage;