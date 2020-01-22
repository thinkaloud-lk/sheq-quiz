import React, { useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import ReactCountdownClock from 'react-countdown-clock';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useScore } from '../../hooks/useScore';
import useQuestions from '../../hooks/useQuestions';

import Layout from '../../components/Layout';
import Question from '../Question'

const QuizPage = ({ history }) => {
  const [step, setStep] = useState(0);

  const { questions, error, loading } = useQuestions()
  const maxSteps = questions && questions.length;
  const { answers } = useScore();
  console.log('ans', answers)
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
        loading ? <p>loading</p> : (
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <Question question={questions[step]} />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
              {
                step === maxSteps - 1 && (
                  <Button
                    size="large"
                    variant="contained"
                    style={{ width: '80%', alignSelf: 'center', color: 'white', marginBottom: 20, backgroundColor: '#f57f17' }}
                    onClick={() => history.push("/result")} color='white' >
                    Submit
                  </Button>
                )
              }
              <MobileStepper
                steps={maxSteps}
                position="static"
                elevation={10}
                style={{ width: '100%', paddingRight: 0, paddingLeft: 0, backgroundColor: '#90a4ae' }}
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
            </div>
          </div>
        )
      }
    </Layout>
  );
}

export default withRouter(QuizPage);