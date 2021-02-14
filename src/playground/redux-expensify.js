import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_END_DATE

// expenses reducer

const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
}

//store creation
const store = createStore(
    combineReducers({
        expenses : expenseReducer,
        filters : filterReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses : [{
        id : '111',
        description : 'Jan rent',
        note : 'final payment for that address',
        amount : 54500,
        createdAt : 0
    }],
    filters : {
        text : 'rent',
        sortBy : 'amount', //date or amount
        startDate : undefined,
        endDate : undefined
    }
};