import React from 'react';
import { removeExpense } from '../actions/expenses';
import  { connect } from 'react-redux';

const ExportListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt} </p>
        <button onClick={()=>{
            dispatch(removeExpense({id}));
            console.log("remove clicked!!");
        }}>Remove</button>
        {/* {props.expenses.length} */}
        {/* { props.expenses.map((item) => {
              console.log("item  here = ", item.description);
              <p> {  item.description } </p> 
          }) 
        } */}
    </div>
);

export default connect()(ExportListItem);