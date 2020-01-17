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
  const goNext = () => {
    setStep((prevStep => setStep(prevStep + 1)))
  }
  const goBack = () => {
    setStep((prevStep => setStep(prevStep - 1)))
  }

  const { score, answers } = useScore();
  console.log(answers)
  return (
    <div style={{ display: 'flex', flex: '1', }}>
      <Container maxWidth="sm" style={{}}>
        <Paper
          elevation={10}
          style={{
            display: "flex",
            flexDirection: 'column',
            padding: '5vh',
            alignItems: 'center',
            backgroundColor: '#558b2f',
            height: '80vh',
            borderRadius: 15
          }}
        >
          <Question question={questions[step]} />
          <MobileStepper
            steps={maxSteps}
            position="static"
            style={{ width: '100%' }}
            variant="dots"
            activeStep={step}
            nextButton={
              <Button size="small" onClick={goNext} disabled={step === maxSteps - 1}>
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
    </div>
  );
}

export default QuizPage;