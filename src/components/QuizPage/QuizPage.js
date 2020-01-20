import React, { useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import ReactCountdownClock from 'react-countdown-clock';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useScore } from '../../hooks/useScore';
import { useFirestoreCollection } from '../../hooks/useFirestore';

//import { questions } from '../../models/mock';
import Layout from '../../components/Layout';
import Question from '../Question'

const QuizPage = ({ history }) => {
  const [step, setStep] = useState(0);
  const { checkAnswers, data } = useScore()
  const maxSteps = data && data.length;
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
    <Layout timer>
      {
        data && <Question question={data[step]} />
      }

      {
        step === maxSteps - 1 && (
          <Button size="large" fullWidth variant="contained" onClick={() => history.push("/result")} color='white' >
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
    </Layout>
  );
}

export default withRouter(QuizPage);