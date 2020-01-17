import React from 'react';
import QuizPage from './components/QuizPage';
import { ScoreProvider } from './hooks/useScore';

function App() {
  return (
    <ScoreProvider>
      <QuizPage />
    </ScoreProvider>
  );
}

export default App;
