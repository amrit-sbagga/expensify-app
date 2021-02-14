import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
})


// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_END_DATE

// expenses reducer

const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => (id !== action.id))
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

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({
    description : 'Rent',
    amount : 100
}));

const expenseTwo = store.dispatch(addExpense({
    description : 'Coffee',
    amount : 300
}));

store.dispatch(removeExpense({
    id : expenseOne.expense.id
}))

//console.log(expenseOne);

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