import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

//Action generator functions
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
const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text
})
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
        case 'EDIT_EXPENSE' :
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text : action.text
            };
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

console.log("add expense..!!");
const expenseOne = store.dispatch(addExpense({
    description : 'Rent',
    amount : 100
}));

console.log("add expense..!!");
const expenseTwo = store.dispatch(addExpense({
    description : 'Coffee',
    amount : 300
}));

console.log("remove expense..!!");
store.dispatch(removeExpense({
    id : expenseOne.expense.id
}));

console.log("edit expense..!!");
store.dispatch(editExpense(
    expenseTwo.expense.id,
    { amount : 500}
))

console.log("filters..!!");
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

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

// const user = {
//     "name" : "Amrit"
// }

// console.log({
//     ...user,
//     location : 'New York',
//     age : 30
// });