import React from 'react';
import { shallow } from '../setupTests';
import toJSON from 'enzyme-to-json';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

it('should render expense list item', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
