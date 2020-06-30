import React from "react";

const TableRow = (props) => {
  return (
    <tr >
      <th scope="col">{props.id + 1}</th>
      <th scope="col">{`${props.user.name.first} ${props.user.name.last}`}</th>
      <th scope="col">{props.user.email}</th>
      <th scope="col">{props.user.cell}</th>
      <th scope="col">{props.user.location.city}</th>
    </tr>
  );
};

export default TableRow;
