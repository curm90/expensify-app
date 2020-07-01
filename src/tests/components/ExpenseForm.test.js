import React from 'react';
import moment from 'moment';
import { shallow } from '../setupTests';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

it('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should set description on input change', () => {
  const value = 'new description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value },
  });

  expect(wrapper.state('description')).toBe(value);
});

it('should set note on textarea change', () => {
  const value = 'new note';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea').simulate('change', {
    target: { value },
  });

  expect(wrapper.state('note')).toBe(value);
});

it('should set amount for valid input', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });

  expect(wrapper.state('amount')).toBe(value);
});

it('should not set amount for invalid input', () => {
  const value = '12.122';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });

  expect(wrapper.state('amount')).toBe('');
});

it('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

it('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

it('should set calender focused on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
