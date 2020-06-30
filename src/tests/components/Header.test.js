import React from 'react';
import { shallow } from '../setupTests';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

it('should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
