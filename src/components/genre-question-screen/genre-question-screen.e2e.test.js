import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from "./genre-question-screen";
Enzyme.configure({adapter: new Adapter()});

it(`GenreQuestionScreen is able to work`, () => {
  const clickHandler = jest.fn();
  const testValues = {
    screenIndex: 0,
    question: {
      answers: [],
      genre: ``,
    },
    onAnswer: clickHandler,
  };
  const genreQuestionScreen = shallow(<GenreQuestionScreen
    {...testValues}
  />);
  const event = {preventDefault: () => {}};
  jest.spyOn(event, `preventDefault`);
  const answerButton = genreQuestionScreen.find(`.game__tracks`);
  answerButton.simulate(`submit`, event);
  expect(event.preventDefault).toBeCalled();
  expect(testValues.onAnswer).toHaveBeenCalledTimes(1);
});

