import React, { useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import ReactCountdownClock from 'react-countdown-clock';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useScore } from '../../hooks/useScore';
import logo from '../../assets/logo.png';
import Layout from '../Layout';

const instructions = [
  { label: "You will get exactly 15min" },
  { label: "Once 15min is gone quiz will be submitted automatically" },
  { label: "Do not refresh the web page " },
  { label: "No call a friend or ask the audience option" },
  { label: "The team with highest average score will win" },
  { label: "If two teams have equal scores, team participation percentage will be considered" },
]

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    justifyContent: 'center',
  },
  wrapper: {
    justifyContent: 'space-between'
  },
  departments: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(4),
  },
  textInput: {
    marginBottom: theme.spacing(4)
  },
  image: {
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '40%',
  }
}));

const QuizIntroPage = ({ history }) => {
  const { startQuiz, setAnswers, setTimesUp, currentUser } = useScore();
  const classes = useStyles();

  return (
    <Layout>
      <Container className={classes.root}>
        <img src={logo} width="250" className={classes.image} />
        <Typography variant="h4" align="center" style={{ color: '#1b5e20', marginBottom: 20 }}>Quiz will start soon </Typography>
        <Container>
          <Paper elevation={5} style={{ padding: 10, borderRadius: 10 }}>
            {
              instructions.map(i => <Typography variant="h6" align="center" style={{ color: '#1b5e20', marginBottom: 10 }}>{i.label}</Typography>)
            }
          </Paper>
        </Container>
      </Container>
    </Layout>
  );
}

export default withRouter(QuizIntroPage);