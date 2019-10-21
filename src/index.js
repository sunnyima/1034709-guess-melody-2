import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './components/app/app';

const init = () => {
  const settings = {
    gameTime: 7,
    errorCount: 4,
  };
  ReactDOM.render(<App
    mistakes = {settings.errorCount}
    time = {settings.gameTime}
  />, document.querySelector(`#root`));
};

init.propTypes = {
  settings: PropTypes.shape(
      {
        gameTime: PropTypes.number.isRequired,
        errorCount: PropTypes.number.isRequired,
      }),
};

init();
