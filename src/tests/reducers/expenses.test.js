import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type : '@@INIT'});
    expect(state).toEqual([]);
});


test('should remove expense by id', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});


test('should not remove expenses if id not found', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

//should add an expense

//should edit an expense

//should not edit expense if expense not found