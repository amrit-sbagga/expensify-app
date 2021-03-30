import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
//import { removeExpense } from '../actions/expenses';
//import  { connect } from 'react-redux';

const ExportListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            { numeral(amount / 100).format('$0, 0.00') } 
             - 
            { moment(createdAt).format('MMMM Do, YYYY') } 
        </p>
        {/* <button onClick={()=>{
            dispatch(removeExpense({id}));
            console.log("remove clicked!!");
        }}>Remove</button> */}
        {/* {props.expenses.length} */}
        {/* { props.expenses.map((item) => {
              console.log("item  here = ", item.description);
              <p> {  item.description } </p> 
          }) 
        } */}
    </div>
);

//export default connect()(ExportListItem);
export default ExportListItem;