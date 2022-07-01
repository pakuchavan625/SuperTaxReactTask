import React from "react";

const ReadOnlyPatient = ({ items,handleEditPatient ,handleDelete}) => {
  return (
      <tr>
        <th scope="row">{items.id}</th>
        <td>{items.firstName}</td>
        <td>{items.lastName}</td>
        <td>{items.email}</td>
        <td>{items.gender}</td>
        <td>
          <button className="btn btn-primary" onClick={(e)=>handleEditPatient(e,items)}>edit</button>
          <span>/</span>
          <button  className="btn btn-danger"onClick={(e)=>handleDelete(e,items.id)}>delet</button>
        </td>
      </tr>
   
  );
};

export default ReadOnlyPatient;
