import React from 'react';
import PropTypes from 'prop-types';

const App = (props) =>{
  return (
    <div>
      <p>Время на игру : {props.time}</p>
      <p>Количество возможных ошибок : {props.mistakes}</p>
    </div>
  );
};

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

export default App;
