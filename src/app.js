import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

// store.dispatch(addExpense({
//     description : 'Water Bill',
//     amount : 400,
//     createdAt : 1000
// }));

// store.dispatch(addExpense({
//     description : 'Gas Bill',
//     amount : 700,
//     createdAt : 2000
// }));

// store.dispatch(addExpense({
//     description : 'Rent',
//     amount : 7000
// }));

// store.dispatch(setTextFilter('water'));

//console.log(store.getState());

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

// const state = store.getState();
// const visibleExpenses = 
//     getVisibleExpenses(state.expenses, state.filters)
// //console.log(store.getState());
// console.log("visibleExpenses = ", visibleExpenses);

// store.subscribe(() => {
    
// })

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>    
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById("app"));
        hasRendered = true;
    }
};


//ReactDOM.render(<AppRouter />, document.getElementById("app"));
ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));


firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        //console.log("log in");
        console.log('uid = ', user.uid);
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === "/"){
                history.push('/dashboard');
            }
        });

    } else {
        store.dispatch(logout());
        //console.log("log out");
        renderApp();
        history.push('/');
    }
});