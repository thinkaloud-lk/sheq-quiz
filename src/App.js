import React from 'react';
import StartPage from './components/StartPage';
import HomePage from './components/HomePage'
import QuizIntroPage from './components/QuizIntroPage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage'
import WinnerPage from './components/WinnerPage';
import AdminPage from './components/AdminPage';
import { ScoreProvider } from './hooks/useScore';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useScore } from './hooks/useScore';
import { useQuiz } from './hooks/useQuiz';

function App() {
  const { timesUp, currentUser } = useScore();
  const { status } = useQuiz();
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            switch (status) {
              case "PENDING":
                return <StartPage />
              case "ONGOING":
                return <Redirect to='/home' />
              case "COMPLETED":
                return <Redirect to='/winner' />
              default:
                break;
            }
          }}
        />
        <Route path="/home" exact render={() => status === "COMPLETED" ? <Redirect to='/winner' /> : <HomePage />} />
        <Route path="/intro" render={() => status === "COMPLETED" ? <Redirect to='/winner' /> : <QuizIntroPage />} />
        <Route path="/result" render={() => status === "COMPLETED" ? <Redirect to='/winner' /> : <ResultPage />} />
        <Route path="/quiz" render={() => timesUp ? <Redirect to='/result' /> : <QuizPage />} />
        <Route path="/winner" component={WinnerPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
