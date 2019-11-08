import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from "./genre-question-screen";

it(`GenreQuestionScreen correctly renders after relaunch`, () => {
  const tree = renderer.create(<GenreQuestionScreen
    screenIndex={0}
    question={{
      answers: [],
      genre: ``,
    }}
    onAnswer={ jest.fn() }
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
