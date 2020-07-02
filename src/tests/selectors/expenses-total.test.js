import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

it('should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

it('should correctly add up a single expense', () => {
  const res = selectExpensesTotal([expenses[1]]);
  expect(res).toBe(109500);
});

it('should correctly add up a mulitple expense', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});
