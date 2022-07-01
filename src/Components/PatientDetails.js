import React, { useState } from "react";
import "../styles/patientdetails.css";
import Modal from "react-modal";
import data from "../mock-data.json";
import ReadOnlyPatient from "./ReadOnlyPatient";
import EditPatients from "./EditPatients";
import Pagination from "react-js-pagination";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const PatientDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const totalRecords = 10;
  const pageRange = 2;
  const [modalIsOpen, setIsOpen] = useState(false);

  const [patientData, setPatientData] = useState(data);

  const [addPatientFormData, setAddPatientFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  const [editPatientForm, seteditPatientForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  const [editPatientId, setEditPatientId] = useState(null);

  const [searchByName, setSearchByName] = useState("");

  const [order, setOrder] = useState("ASC");

  const handleAddPatient = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    let value = e.target.value;

    setAddPatientFormData({
      ...addPatientFormData,
      [e.target.id]: value,
    });
  };

  const handleEditPatientForm = (e) => {
    e.preventDefault();
    let value = e.target.value;

    seteditPatientForm({
      ...editPatientForm,
      [e.target.name]: value,
    });
  };

  const addNewPatient = (e, patientData) => {
    e.preventDefault();

    const newPatientobj = {
      id: patientData.length + 1,
      firstName: addPatientFormData.firstName,
      lastName: addPatientFormData.lastName,
      email: addPatientFormData.email,
      gender: addPatientFormData.gender,
    };

    const addNewPatients = [...patientData, newPatientobj];
    setPatientData(addNewPatients);
    setIsOpen(false);

  };

  const addEditPatientForm = (e) => {
    e.preventDefault();

    const editedPatientObj = {
      id: editPatientId,
      firstName: editPatientForm.firstName,
      lastName: editPatientForm.lastName,
      email: editPatientForm.email,
      gender: editPatientForm.gender,
    };

    const newEditedPatient = [...patientData];
    const index = patientData.findIndex((items) => items.id === editPatientId);

    newEditedPatient[index] = editedPatientObj;
    setPatientData(newEditedPatient);

    setEditPatientId(null);
  };

  const handleEditPatient = (e, patientData) => {
    e.preventDefault();
    setEditPatientId(patientData.id);

    const formValue = {
      firstName: patientData.firstName,
      lastName: patientData.lastName,
      email: patientData.email,
      gender: patientData.gender,
    };

    seteditPatientForm(formValue);
  };

  const handleCancelClik = () => {
    setEditPatientId(null);
  };

  const handleDelete = (e, patientid) => {
    e.preventDefault();
    const newPatientsrow = [...patientData];
    const index = patientData.findIndex((items) => items.id === patientid);
    newPatientsrow.splice(index, 1);
    setPatientData(newPatientsrow);
  };

  const handlesearchByName = (e, patientDataList) => {
    e.preventDefault();

    if (e.target.value != "") {
      let keyword = e.target.value;

      let filtered = patientData.filter((item) => {
        return item.firstName.toLocaleLowerCase().indexOf(keyword) > -1;
      });
      setPatientData(filtered);
    } else {
      window.location.reload();
      // json data i have takes so i used window.location 
      // setPatientData(()=> [...patientData])
    }
  };

  const sortingData = (col) => {
    if (order === "ASC") {
      const sortedData = [...patientData].sort((a, b) =>
        a[col].toLocaleLowerCase() > b[col].toLocaleLowerCase() ? 1 : -1
      );
      setPatientData(sortedData);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sortedData = [...patientData].sort((a, b) =>
        a[col].toLocaleLowerCase() < b[col].toLocaleLowerCase() ? 1 : -1
      );
      setPatientData(sortedData);

      setOrder("ASC");
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPatientData(patientData);
  };

  return (
    <div>
      <div className="header">
        <h1>welcome to the Pristan Care Hospital</h1>
        <h3>Patient List</h3>
      </div>
      <div className="container pateintDetail">
        <div>
          <div className="add-serach-btn">
            <button className="btn btn-success" onClick={handleAddPatient}>
              Add new patient
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <form class="table-data">
                <div class="mb-3">
                  <label class="form-label">FirstName</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    onChange={handleOnChange}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Lastname</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    onChange={handleOnChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    onChange={handleOnChange}
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Gender</label>
                  <select
                    className="form-control"
                    id="gender"
                    onChange={handleOnChange}
                  >
                    <option>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <button
                  type="submit"
                  class="btn btn-primary add-buuton"
                  onClick={(e) => addNewPatient(e, patientData)}
                >
                  Add
                </button>
              </form>
            </Modal>
            <input
              type="text"
              placeholder="search by FirstName"
              name="search"
              className="form-control input-field"
              onChange={(e) => handlesearchByName(e, patientData)}
            />
          </div>
          <form>
            <table className="table tabledata">
              <thead>
                <tr>
                  <th
                    scope="col"
                    onClick={() => sortingData("id")}
                    style={{ cursor: "pointer" }}
                  >
                    Sl.No
                  </th>
                  <th
                    scope="col"
                    onClick={() => sortingData("firstName")}
                    style={{ cursor: "pointer" }}
                  >
                    FirstName <span class="fa-solid fa-arrows-up-down"></span>
                  </th>
                  <th
                    scope="col"
                    onClick={() => sortingData("lastName")}
                    style={{ cursor: "pointer" }}
                  >
                    LastName
                  </th>
                  <th scope="col" onClick={() => sortingData("email")}>
                    email
                  </th>
                  <th scope="col" onClick={() => sortingData("gender")}>
                    gender
                  </th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {patientData.map((items) => {
                  return (
                    <>
                      {editPatientId === items.id ? (
                        <EditPatients
                          editPatientForm={editPatientForm}
                          handleEditPatientForm={handleEditPatientForm}
                          addEditPatientForm={addEditPatientForm}
                          handleCancelClik={handleCancelClik}
                        />
                      ) : (
                        <ReadOnlyPatient
                          items={items}
                          handleDelete={handleDelete}
                          handleEditPatient={handleEditPatient}
                        />
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
            <div className="pagination">
              <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={currentPage}
                itemsCountPerPage={recordPerPage}
                totalItemsCount={totalRecords}
                pageRangeDisplayed={pageRange}
                onChange={handlePageChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
