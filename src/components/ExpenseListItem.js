import React from 'react';

const ExportListItem = ({description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt} </p>
        {/* {props.expenses.length} */}
        {/* { props.expenses.map((item) => {
              console.log("item  here = ", item.description);
              <p> {  item.description } </p> 
          }) 
        } */}
    </div>
)

export default ExportListItem;