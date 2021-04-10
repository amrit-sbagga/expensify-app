import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({
    description : 'Water Bill',
    amount : 400,
    createdAt : 1000
}));

store.dispatch(addExpense({
    description : 'Gas Bill',
    amount : 700,
    createdAt : 2000
}));

store.dispatch(addExpense({
    description : 'Rent',
    amount : 7000
}));

store.dispatch(setTextFilter('water'));

//console.log(store.getState());

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000)

const state = store.getState();
const visibleExpenses = 
    getVisibleExpenses(state.expenses, state.filters)
//console.log(store.getState());
console.log("visibleExpenses = ", visibleExpenses);

// store.subscribe(() => {
    
// })

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)


//ReactDOM.render(<AppRouter />, document.getElementById("app"));
ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById("app"));
});


