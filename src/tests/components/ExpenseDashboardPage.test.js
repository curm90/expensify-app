import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from '../setupTests';
import Homepage from '../../components/ExpenseDashboardPage';

it('should render dashboard page', () => {
  const wrapper = shallow(<Homepage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
