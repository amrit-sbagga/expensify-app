import { v4 as uuidv4 } from 'uuid';

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// new call with firebase
// component calls action generator
// action generator returns function
// component dispatches function (?)
// function runs (has the ability to dispatch other action & do whatever it wants)

// Action generator functions
// ADD_EXPENSE
export const addExpense = (
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
export const removeExpense = ({ id } = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
})


// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})
