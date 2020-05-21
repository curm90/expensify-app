import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/404';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route
          path='/'
          exact={true}
          component={ExpenseDashboardPage}
        />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
