import React from 'react';
import { shallow } from '../setupTests';
import toJSON from 'enzyme-to-json';
import { ExpensesSummary } from '../../components/ExpensesSummary';

it('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should correctly render ExpensesSummary with mulitple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={132324343223} />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
