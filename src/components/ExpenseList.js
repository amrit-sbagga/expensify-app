import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
);

//maps store state to component props
const mapStateToProps = (state) => {
    return {
        expenses : state.expenses,
        filters : state.filters
    };
}

export default connect(mapStateToProps)(ExpenseList);
//export default ConnectedExpenseList;