import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import moment, { min } from 'moment';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWeap: 'wrap',
  },
  item: {
    color: '#111',
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    lineHeight: 30,
    margin: 10,
    paddingTop: 10,
    position: 'relative',
    width: 100,
    height: 100,
  }
})

const Timer = () => {
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)
  const classes = useStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      const timeTillDate = "01 25 2020, 11:03 am"
      const timeFormat = "MM DD YYYY, h:mm a"
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      console.log(countdown)
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');


      setMinutes(minutes);
      setSeconds(seconds)
    }, 1000)
  })
  return (
    <div>
      <h1>Countdown</h1>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          {minutes}
          minutes
        </div>
        <div className={classes.item}>
          {seconds}
          seconds
        </div>
      </div>
    </div>
  );
}

export default Timer;