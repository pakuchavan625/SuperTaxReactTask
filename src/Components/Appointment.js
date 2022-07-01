import React from "react";
import "../styles/appointment.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Appointment = () => {
  const navigate = useNavigate();
  const [appoitnmentFormData, setAppointmentFormData] = useState({
    patientName: "",
    mobileNumber: "",
    enquiry: "",
  });
  

  const handleBooking = () => {
    axios({
      methos: "post",
      url: "https://reqres.in/api/users",
      data: {
        name: appoitnmentFormData.patientName,
        mobile: appoitnmentFormData.mobileNumber,
        job: appoitnmentFormData.enquiry,
      },
    })
      .then((res) => {
        console.log(res.data.data[0]);
        toast("Your appointment is booked successfulyy");
        navigate("/home", { state: { name: res.data.data[0].first_name } });
        setAppointmentFormData(res.data.data[0])
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBookOnchnageForm = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setAppointmentFormData({
      ...appoitnmentFormData,
      [e.target.id]: value,
    });
  };

  return (
    <div>
      <div className="header">
        <h1>welcome to the Pristan Care Hospital</h1>
        <h3>Book Your Appointment today ony!</h3>
      </div>
      <div className="container">
        <div className="appointment-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <img src="./Assets/doc.jpg" className="doc-img" alt="doc" />
            </div>
            <div className="col-lg-6">
              <div className="appointment-form">
                <div className="appointment-headings">
                  <div className="main-heading">
                    Let's Schedule Your Free Appointment
                  </div>
                  <div className="sub-heading">Pristyn Care</div>
                </div>
                <div className="patient-name">
                  <label class="form-label">Patient Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="patientName"
                    placeholder="Enter your name"
                    onChange={handleBookOnchnageForm}
                  />
                </div>
                <div className="mobile-number">
                  <label class="form-label">Mobile Number</label>
                  <input
                    type="num"
                    class="form-control"
                    id="mobileNumber"
                    placeholder="Enter your mobile number"
                    onChange={handleBookOnchnageForm}
                  />
                </div>
                <div class="enquiry">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Enquiry
                  </label>
                  <textarea
                    class="form-control"
                    id="enquiry"
                    rows="3"
                    onChange={handleBookOnchnageForm}
                  ></textarea>
                  <button
                    className="btn btn-primary btn-book"
                    onClick={handleBooking}
                  >
                    BOOK YOUR APPOINTMENT
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
