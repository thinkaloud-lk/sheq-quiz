import React, { useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import ReactCountdownClock from 'react-countdown-clock';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useScore } from '../../hooks/useScore';
import useDepartments from '../../hooks/useDepartments';
import useUsers from '../../hooks/useUsers';
import TextField from '@material-ui/core/TextField';

import Layout from '../Layout';

const HomePage = ({ history }) => {
  const [department, setDepartment] = useState(null);
  const [name, setName] = useState(null)
  const { departments } = useDepartments();
  const [departmentUsers, setDepartmentUsers] = useState(null);
  const { addNewUser, user } = useScore();

  return (
    <Layout>
      <div style={{ marginTop: 20, display: 'flex', width: '60%', flexDirection: 'column' }}>
        <Typography variant="h6" align="center" style={{ color: '#1b5e20' }}>
          PLEASE SELECT YOUR TEAM
        </Typography>

        {
          departments ? (
            <div
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginTop: 20 }}
            >
              {
                departments && departments.map((choice) => {
                  const { id, label } = choice;
                  return (
                    <div style={{ marginBottom: 10, width: '100%' }}>
                      <Button
                        variant="contained"
                        style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', backgroundColor: (department === id) ? '#009688' : '#eceff1' }}
                        onClick={() => setDepartment(id)}
                      >
                        <Typography variant="body1" align="left" style={{ color: (department === id) ? 'white' : "#455a64" }}  >{label}</Typography>
                      </Button>
                    </div>
                  )
                })
              }
            </div>
          )
            :
            <p>Loading</p>
        }
        {
          department &&
          <div style={{ marginTop: 20, width: '100%' }}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              style={{ width: '100%' }}
              onChange={(event) => setName(event.target.value)}
              id="firstName"
              label="First Name"
              autoFocus
            />
          </div>
        }
        {
          name && (
            <div style={{ marginTop: 20, width: '100%' }}>
              <Button
                size="large"
                fullWidth
                variant="contained"
                style={{ width: '100%', alignSelf: 'center', color: 'white', marginBottom: 20, backgroundColor: '#f57f17' }}
                onClick={() => {
                  addNewUser(department, name)
                  history.push("/intro")
                }}
                color='white'
              >
                Let's Go
            </Button>
            </div>
          )
        }
      </div>
    </Layout >
  );
}

export default withRouter(HomePage);