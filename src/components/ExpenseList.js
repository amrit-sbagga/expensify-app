import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {/* <h1>ExpenseList</h1> */}
        props.expenses.length === 0 ? {
            <p>No Expenses</p>
        } :
        {
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense } />
            })
        }

    </div>
);

//maps store state to component props
const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses, state.filters)
        //expenses : state.expenses,
        //filters : state.filters
    };
}

export default connect(mapStateToProps)(ExpenseList);
//export default ConnectedExpenseList;