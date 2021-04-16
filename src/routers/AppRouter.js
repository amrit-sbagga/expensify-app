import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <PublicRoute path="/" component = { LoginPage } exact={true}/>
                <PrivateRoute path="/dashboard" component = { ExpenseDashboardPage } />
                <PrivateRoute path="/create" component = { AddExpensePage } />
                <PrivateRoute path="/edit/:id" component = { EditExpensePage } />
                {/* <Route path="/help" component = { HelpPage } /> */}
                <Route component = { NotFoundPage } />
            </Switch>
        </div>
    </Router>    
)

export default AppRouter;
