import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ReactCountdownClock from 'react-countdown-clock';
import { useScore } from '../../hooks/useScore';

const Layout = ({ children, timer }) => {
  const { setTimesUp } = useScore();

  return (
    <Grid>
      <Container maxWidth="sm" style={{}}>
        <Paper
          elevation={10}
          style={{
            display: "flex",
            flexDirection: 'column',
            padding: '5vh',
            alignItems: 'center',
            backgroundColor: '#00695c',
            height: '80vh',
            borderRadius: 15
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
      </Container>
    </Grid>
  )

}
export default Layout;