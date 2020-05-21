import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expense';

const store = configureStore();

store.dispatch(
  addExpense({ description: 'water bill', amount: 4500 })
);
store.dispatch(addExpense({ description: 'gas bill' }));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(
  state.expenses,
  state.filters
);

console.log(visibleExpenses);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
