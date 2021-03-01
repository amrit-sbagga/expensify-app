import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id : 1,
    description : "Gum",
    note : "",
    amount : 195,
    createdAt : 0
},{
    id : 2,
    description : "Rent",
    note : "",
    amount : 1095,
    createdAt : -1000
}, {
    id : 3,
    description : "Credit card",
    note : "",
    amount : 4500,
    createdAt : 1000
}]

test('should filter by test value', () => {
    const filters = {
        test : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    const result = selectExpenses();
    expect(result).toEqual([ expenses[2], expenses[1]]);
})