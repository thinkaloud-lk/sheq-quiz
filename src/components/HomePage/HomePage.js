import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useScore } from '../../hooks/useScore';
import useDepartments from '../../hooks/useDepartments';
import useUsers from '../../hooks/useUsers';
import Layout from '../Layout';

const useStyles = makeStyles(theme => ({
  root: {
    width: '60%',
    paddingTop: 20,
  },
  wrapper: {
    justifyContent: 'space-between'
  },
  departments: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4),
  },
  users: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  textInput: {
    marginBottom: theme.spacing(4)
  }
}));

const HomePage = ({ history }) => {
  const [department, setDepartment] = useState(null);
  const [departmentUsers, setDepartmentUsers] = useState(null);
  const [name, setName] = useState(null)
  const { loginUser, currentUser } = useScore();
  const classes = useStyles();
  const { departments } = useDepartments();

  const { users } = useUsers();

  const getDepartmentUsers = (id) => {
    const newUsers = users && users.filter(user => user.department === id)
    setDepartmentUsers(newUsers)
  }

  return (
    <Layout>
      <Container className={classes.root}>
        <Box className={classes.wrapper}>
          <Typography variant="h6" align="center" style={{ marginBottom: 20, color: '#1b5e20' }}>
            PLEASE SELECT YOUR TEAM
            </Typography>
          {
            departments ? (
              <Container className={classes.departments} >
                {
                  departments.map((choice) => {
                    const { id, label } = choice;
                    return (
                      <Button
                        variant="contained"
                        style={{ width: '48%', marginBottom: 10, backgroundColor: (department === id) ? '#009688' : '#eceff1' }}
                        onClick={() => {
                          setDepartment(id)
                          getDepartmentUsers(id);
                        }}
                      >
                        <Typography variant="body1" align="left" style={{ color: (department === id) ? 'white' : "#455a64" }}  >{label}</Typography>
                      </Button>
                    )
                  })
                }
              </Container >
            )
              :
              <Container>
                <p>Loading</p>
              </Container>
          }

          {
            departmentUsers && (
              <div>
                <Typography variant="h6" align="center" style={{ marginBottom: 20, color: '#1b5e20' }}>
                  NOW, IDENTIFY YOURSELF
                </Typography>
                <Container className={classes.users} >
                  {
                    departmentUsers.map((user) => {
                      const { id, name, status } = user;
                      return (
                        <Button
                          variant="contained"
                          disabled={status === 'COMPLETED'}
                          style={{ width: '48%', marginBottom: 10, backgroundColor: (currentUser && currentUser.id === id) ? '#009688' : '#eceff1' }}
                          onClick={() => {
                            loginUser(id, name, department);
                            history.push("/intro")
                          }}
                        >
                          <Typography variant="body1" align="left" style={{ color: (currentUser && currentUser.id === id) ? 'white' : "#455a64" }}  >{name}</Typography>
                        </Button>
                      )
                    })
                  }
                </Container >
              </div>

            )
          }
        </Box>
      </Container>
    </Layout >
  );
}

export default withRouter(HomePage);