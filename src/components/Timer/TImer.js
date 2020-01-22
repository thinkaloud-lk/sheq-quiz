import React, { useState, useEffect } from 'react';
import useInterval from '../../hooks/useInterval';

const Timer = () => {
  const [value, setValue] = useState(6000)
  useInterval(() => {
    if (value)
      setValue(value - 1);
  }, 1000);
  return (
    <p>{value}</p>
  );
}

export default Timer;