import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import { useScore } from '../../hooks/useScore';

import { questions } from '../../models/mock';
import Question from '../Question'

const QuizPage = () => {
  const maxSteps = questions.length;
  const [step, setStep] = useState(0);
  const { checkAnswers, score } = useScore()
  const goNext = () => {
    setStep((prevStep => setStep(prevStep + 1)))
  }
  const goBack = () => {
    setStep((prevStep => setStep(prevStep - 1)))
  }

  const getRightButton = (step) => {
    if (step = maxSteps - 1) {
      return
    }
  }

  return (
    <Container maxWidth="sm" style={{}}>
      <Paper
        elevation={10}
        style={{
          display: "flex",
          justifyContent: 'space-between',
          flexDirection: 'column',
          padding: '5vh',
          alignItems: 'center',
          backgroundColor: '#00695c',
          height: '80vh',
          borderRadius: 15
        }}
      >
        <Question question={questions[step]} />
        {
          step === maxSteps - 1 && (
            <Button size="large" fullWidth variant="contained" onClick={() => checkAnswers()} color='white' >
              Submit
            </Button>
          )
        }
        <MobileStepper
          steps={maxSteps}
          position="static"
          style={{ width: '100%', backgroundColor: '#ffb300' }}
          variant="dots"
          activeStep={step}
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
      </Paper>
    </Container>
  );
}

export default QuizPage;