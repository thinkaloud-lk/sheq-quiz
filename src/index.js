import React from 'react';
import ReactDOM from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ScoreProvider } from './hooks/useScore';
import { QuizProvider } from './hooks/useQuiz';

ReactDOM.render(
  <QuizProvider>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </QuizProvider>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
