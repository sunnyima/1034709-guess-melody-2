import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {genreQuestions, artistQuestions, settings} from "./mocks/questions";
import PropTypes from "prop-types";

const init = (gameSettings, gameQuestions) => {
  ReactDOM.render(
      <App
        errorCount={gameSettings.errorCount}
        gameTime={gameSettings.gameTime}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init.propTypes = {
  gameSettings: PropTypes.shape({
    gameTime: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired,
  }),
  gameQuestions: PropTypes.array.isRequired,
};


init(settings, genreQuestions);
