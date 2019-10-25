import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../app/app';
Enzyme.configure({adapter: new Adapter()});
it(`App is able to work`, () => {
  const app = shallow(<App
    mistakes={0}
    time={0}
  />);
});
