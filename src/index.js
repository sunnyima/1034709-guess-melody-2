import React from 'react';
import ReactDOM from 'react-dom';
import App from './conponents/app/app';

const init = () => {
  ReactDOM.render(
      <App/>,
      document.querySelector(`#root`)
  );
};

init();
