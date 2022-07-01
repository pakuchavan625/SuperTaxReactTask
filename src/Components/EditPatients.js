import React from "react";

const EditPatients = ({editPatientForm, handleEditPatientForm,addEditPatientForm ,handleCancelClik}) => {
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          placeholder="Enter your name"
          name="firstName"
          value={editPatientForm.firstName}
          onChange={handleEditPatientForm}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter your lastname"
          name="lastName"
          value={editPatientForm.lastName}
          onChange={handleEditPatientForm}
        />
      </td>
      <td>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={editPatientForm.email}
          onChange={handleEditPatientForm}
        />
      </td>
      <td>
        <select
          className="form-control"
          id="gender"
          name="gender"
          value={editPatientForm.gender}
          onChange={handleEditPatientForm}
        >
          <option>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </td>
      <td>
        <button className="btn btn-success" onClick={addEditPatientForm}>save</button>
      </td>
      <td>
        <button className="btn btn-warning" onClick={handleCancelClik}>cancel</button>
      </td>
    </tr>
  );
};

export default EditPatients;
