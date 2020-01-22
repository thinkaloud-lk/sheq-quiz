import React from 'react';
import HomePage from './components/HomePage'
import QuizIntroPage from './components/QuizIntroPage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage'
import WinnerPage from './components/WinnerPage';
import AdminPage from './components/AdminPage';
import { ScoreProvider } from './hooks/useScore';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useScore } from './hooks/useScore';
function App() {
  const { timesUp, user } = useScore();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/intro" render={() => <QuizIntroPage />} />
        <Route path="/quiz" render={() => timesUp ? <Redirect to='/result' /> : <QuizPage />} />
        <Route path="/result" component={ResultPage} />
        <Route path="/winner" component={WinnerPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
