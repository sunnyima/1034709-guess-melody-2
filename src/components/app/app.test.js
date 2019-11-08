import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app';
import {settings, questions} from "../../mocks/questions";


it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(<App
    errorCount={settings.errorCount}
    gameTime={settings.gameTime}
    questions={questions}
    onUserAnswer={ jest.fn() }
    question={0}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
