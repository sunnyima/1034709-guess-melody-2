import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from "../welcome-screen/welcome-screen";

const clickHandler = () => {
  //
};
const App = (props) =>{
  return (
    <WelcomeScreen
      mistakes = {props.mistakes}
      time = {props.time}
      onClick = {clickHandler}
    />
  );
};

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

export default App;
