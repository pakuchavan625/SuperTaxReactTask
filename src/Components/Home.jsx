import React from "react";
import "../styles/home.css";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
    toast("user logged out successfully");
  };

  const handleAppointment = () => {
    navigate("/book-appointment");
  };

  const handlePatient = () => {
    navigate("/patient-details");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-12 dashbord">
            <span className="hospital-name">S-care Hospital</span>
            <div className="doctor-detail">
              <span class="fa-solid fa-user doc-pic"></span>
              <div className="name">Dr.Hardik</div>
              <div className="qualification">Mbbs</div>
            </div>

            <div className="dashbord-details">
              <div>
                <button className="btn btn-success mb-5 btn-dashbord">
                  Dashborad
                </button>
              </div>
              <div>
                <button
                  className="btn btn-success mb-5 btn-dashbord"
                  onClick={handleAppointment}
                >
                  Appoitnment
                </button>
              </div>
              <div>
                <button
                  className="btn btn-success mb-5 btn-dashbord"
                  onClick={handlePatient}
                >
                  PatientList
                </button>
              </div>

              <div>
                <button
                  className="btn btn-success mb-5 btn-dashbord"
                  onClick={handleLogout}
                >
                  Loogout
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-8 col-sm-12 main-ontent">
            <h1 style={{ textAlign: "center" }}>
              welcome to the Pristan Care Hospital
            </h1>
            <img src="./Assets/doc-pc.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
