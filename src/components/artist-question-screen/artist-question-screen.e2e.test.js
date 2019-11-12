import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from "./artist-question-screen";
Enzyme.configure({adapter: new Adapter()});

it(`ArtistQuestionScreen is able to work`, () => {
  const clickHandler = jest.fn();
  const testValues = {
    screenIndex: 0,
    question: {
      song: {
        artist: ``,
        src: ``,
      },
      answers: [{
        picture: ``,
        artist: ``,
      }],
      type: ``,
    },
    onAnswer: clickHandler,
  };
  const genreQuestionScreen = shallow(<ArtistQuestionScreen
    {...testValues}
  />);
  const answerButton = genreQuestionScreen.find(`.game__artist`);
  answerButton.simulate(`change`);
  expect(testValues.onAnswer).toHaveBeenCalledTimes(1);
});

