import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFIlters from './ExpenseListFilters';

const Homepage = () => (
  <div>
    <h1>Homepage</h1>
    <ExpenseListFIlters />
    <ExpenseList />
  </div>
);

export default Homepage;
