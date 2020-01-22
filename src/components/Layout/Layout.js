import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ReactCountdownClock from 'react-countdown-clock';
import { useScore } from '../../hooks/useScore';
import Timer from '../Timer/TImer';

const Layout = ({ children, timer }) => {
  const { setTimesUp } = useScore();

  return (
    <Container maxWidth="sm" style={{ paddingTop: 10, paddingBottom: 10 }}>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            elevation={10}
            style={{
              display: "flex",
              height: '90vh',
              flexDirection: 'column',
              backgroundColor: 'white',
              alignItems: 'center',
              paddingTop: 20,
            }}
          >
            {
              timer && (
                <ReactCountdownClock seconds={60}
                  color="#f57f17"
                  seconds={600}
                  alpha={0.9}
                  size={75}
                  weight={5}
                  onComplete={() => setTimesUp(true)} />
              )
            }
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )

}
export default Layout;