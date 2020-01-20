import React, { useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import ReactCountdownClock from 'react-countdown-clock';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useScore } from '../../hooks/useScore';
import UserDetails from '../UserDetails';
import { userData } from '../../models/mock';
import Layout from '../Layout';
import Question from '../Question'

const HomePage = ({ history }) => {

  const [step, setStep] = useState(0);
  const { user, setUser, department, setDepartment } = useScore();
  const selectedDepartment = user && user.department && user.department;
  const selectedName = user && user.name && user.name;

  const goNext = () => {
    setStep((prevStep => setStep(prevStep + 1)))
  }
  const goBack = () => {
    setStep((prevStep => setStep(prevStep - 1)))
  }
  const deptData = userData && userData.map(data => ({ id: data.id, label: data.label, choices: data.choices }))

  const questions = [
    {
      id: 1,
      type: 'department',
      label: 'Please select your department',
      choices: deptData,
    },
    {
      id: 2,
      type: 'name',
      label: 'What is your name',
      choices: user ? deptData.find(data => data.id == user.department).choices : null,
    }
  ]
  const maxSteps = questions.length;
  return (
    <Layout>
      <UserDetails question={questions[step]} selectedDepartment={selectedDepartment} selectedName={selectedName} />
      {
        selectedName && (
          <Button size="large" fullWidth variant="contained" onClick={() => history.push("/quiz")} color='white' >
            Let's Go
          </Button>
        )
      }
      <MobileStepper
        steps={maxSteps}
        variant="progress"
        position="static"
        style={{ width: '100%', backgroundColor: '#ffb300' }}
        activeStep={step}
        nextButton={
          <Button size="small" onClick={goNext} color='white' disabled={(step === maxSteps - 1) || !selectedDepartment}>
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

export default withRouter(HomePage);