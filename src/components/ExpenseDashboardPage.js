import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const Homepage = () => (
  <div>
    <h1>Homepage</h1>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default Homepage;
