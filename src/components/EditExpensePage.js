import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
        // console.log('updated = ', expense);
    };

    onRemove = () => {
        this.props.startRemoveExpense({id : this.props.expense.id});
        this.props.history.push('/');
        console.log("remove clicked!!");
    };

    render() {
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>

                {/* Editing the expense with id of {props.match.params.id} */}
            </div>
      
        )
    }
};

const mapStateToprops = (state, props) => ({
    expense : state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense : (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense : (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToprops, mapDispatchToProps)(EditExpensePage);