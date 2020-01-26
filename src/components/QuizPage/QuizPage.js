import React, { useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import ReactCountdownClock from 'react-countdown-clock';
import { withRouter, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { useScore } from '../../hooks/useScore';
import useQuestions from '../../hooks/useQuestions';

import Layout from '../../components/Layout';
import Question from '../Question'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  wrapper: {
    justifyContent: 'space-between'
  },
  departments: {
    display: 'flex',
    flexDirection: 'column',
  },
  textInput: {
    marginBottom: theme.spacing(4)
  }
}));

const QuizPage = ({ history }) => {
  const classes = useStyles();
  const [step, setStep] = useState(0);

  const { questions, error, loading } = useQuestions()
  const { checkAnswers, currentUser, submitUserAnswers } = useScore();

  const maxSteps = questions && questions.length;

  const goNext = () => {
    setStep((prevStep => setStep(prevStep + 1)))
  }
  const goBack = () => {
    setStep((prevStep => setStep(prevStep - 1)))
  }

  if (currentUser) {
    return (
      <Layout timer>
        {
          loading ? <p>loading</p> : (
            <div style={{ display: 'flex', flex: 1, width: '100%', height: '70%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <Question question={questions[step]} />
              {
                step === maxSteps - 1 && (
                  <Button
                    size="large"
                    variant="contained"
                    style={{ width: '80%', alignSelf: 'center', color: 'white', backgroundColor: '#f57f17' }}
                    onClick={() => {
                      submitUserAnswers();
                      history.push("/result")
                    }} color='white' >
                    Submit
                    </Button>
                )
              }
              <div style={{ height: '10%', width: '100%', alignItems: 'center' }}>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  elevation={10}
                  style={{ width: '100%', paddingRight: 0, paddingLeft: 0, backgroundColor: '#90a4ae' }}
                  variant="progress"
                  activeStep={step}
                  LinearProgressProps={{ backgroundColor: 'red' }}
                  nextButton={
                    <Button size="small" onClick={goNext} color='white' disabled={step === maxSteps - 1} >
                      Next
                    </Button>

                  }
                  backButton={
                    <Button size="small" onClick={goBack} disabled={step === 0}>
                      Back
                    </Button>
                  }
                />
              </div>
            </div>
          )
        }
      </Layout>
    )
  } else {
    return <Redirect to='/' />
  }

}

export default withRouter(QuizPage);