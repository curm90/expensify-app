import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from '../setupTests';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage onSubmit={onSubmit} history={history} />
  );
});

it('should render addExpense page correctly', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should handle on submit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});
