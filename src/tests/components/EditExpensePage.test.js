import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from '../setupTests';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      history={history}
      removeExpense={removeExpense}
      expense={expenses[2]}
    />
  );
});

it('should render EditExpensePage', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(
    expenses[2].id,
    expenses[2]
  );
});

it('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id,
  });
});
