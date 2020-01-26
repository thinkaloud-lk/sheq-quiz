import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ReactCountdownClock from 'react-countdown-clock';
import { useScore } from '../../hooks/useScore';
import Timer from '../Timer/TImer';
import Countdown from 'react-countdown';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    height: '90vh',
    padding: '2vh',
    alignItems: 'center',
    borderRadius: theme.spacing(1),
  },
  wrapper: {
  },
}));

const Layout = ({ children, timer }) => {
  const { setTimesUp, submitUserAnswers } = useScore();
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        {
          timer && (
            // <Countdown date={Date.now() + 900000} renderer={timerRenderer} autoStart={false} ref={timerRef} />

            <ReactCountdownClock seconds={60}
              color="#f57f17"
              seconds={900}
              alpha={0.9}
              size={75}
              style={{ marginBottom: 10 }}
              weight={5}
              onComplete={() => {
                submitUserAnswers();
                setTimesUp(true)
              }} />
          )
        }
        {children}
      </Paper>
    </Container>
  )

}
export default Layout;