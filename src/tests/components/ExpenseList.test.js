import React from 'react';
import { shallow } from '../setupTests';
import toJSON from 'enzyme-to-json';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

it('should render expense list with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should render expense list with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
