import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// Action generator functions
// ADD_EXPENSE
const addExpense = (
    {
        //this are all input parameters
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    //this are all used for setting objects
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
});

// SORT_BY_DATE
const sortByDate = () => ({
    type : 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type : 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type : 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type : 'SET_END_DATE',
    endDate
})


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
            //return state.text !== action.text;
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy : 'date'
            }
        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy : 'amount'
            };
        case 'SET_START_DATE' :
            return {
                ...state,
                startDate : action.startDate
            };
        case 'SET_END_DATE' :
            return {
                ...state,
                endDate : action.endDate
            }
        default:
            return state;
    }
}

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

//store creation
const store = createStore(
    combineReducers({
        expenses : expenseReducer,
        filters : filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = 
        getVisibleExpenses(state.expenses, state.filters)
    //console.log(store.getState());
    console.log("visibleExpenses = ", visibleExpenses);
});

//Dispatchers

console.log("add expense..!!");
const expenseOne = store.dispatch(addExpense({
    description : 'Rent',
    amount : 100,
    createdAt : -21000
}));

console.log("add expense..!!");
const expenseTwo = store.dispatch(addExpense({
    description : 'Coffee',
    amount : 300,
    createdAt : -1000
}));

// console.log("remove expense..!!");
// store.dispatch(removeExpense({
//     id : expenseOne.expense.id
// }));

// console.log("edit expense..!!");
// store.dispatch(editExpense(
//     expenseTwo.expense.id,
//     { amount : 500}
// ))

//console.log("filter1..!!");
//store.dispatch(setTextFilter('ffe'));
// console.log("filter2..!!");
//store.dispatch(setTextFilter(''));

console.log("sortByAmount..!!");
store.dispatch(sortByAmount());

// console.log("sortByDate..!!");
// store.dispatch(sortByDate());

//console.log("setStartDate1..!!");
//store.dispatch(setStartDate(0));

// console.log("setStartDate2..!!");
// store.dispatch(setStartDate());

//console.log("setEndDate..!!");
//store.dispatch(setEndDate(1250));

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