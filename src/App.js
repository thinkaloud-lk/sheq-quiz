import React from 'react';
import HomePage from './components/HomePage'
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import { ScoreProvider } from './hooks/useScore';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useScore } from './hooks/useScore';
function App() {
  const { timesUp, user } = useScore();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/quiz" render={() => timesUp ? <Redirect to='/result' /> : <QuizPage />} />
        <Route path="/result" component={ResultPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
