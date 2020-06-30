import filtersReducer from '../../reducers/filters';
import moment from 'moment';

it('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

it('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

it('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount',
  };

  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);

  expect(state.sortBy).toBe('date');
});

it('should set text filter', () => {
  const text = 'test';
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text,
  });

  expect(state.text).toBe(text);
});

it('should set startDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: moment(0),
  });

  expect(state.startDate).toEqual(moment(0));
});

it('should set endDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: moment(1),
  });

  expect(state.endDate).toEqual(moment(1));
});
