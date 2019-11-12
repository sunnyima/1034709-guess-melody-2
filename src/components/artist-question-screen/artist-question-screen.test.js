import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from "./artist-question-screen";

it(`ArtistQuestionScreen correctly renders after relaunch`, () => {
  const tree = renderer.create(<ArtistQuestionScreen
    screenIndex={0}
    question={{
      song: {
        artist: ``,
        src: ``,
      },
      answers: [{
        picture: ``,
        artist: ``,
      }],
      type: ``,
    }}
    onAnswer={ jest.fn() }
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
