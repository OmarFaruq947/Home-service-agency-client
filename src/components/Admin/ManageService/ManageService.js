import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTasks,
  faThList,
  faUserPlus,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../../images/logoWithNoBackground-remove.png";

const ManageService = () => {
    return (
        <div>
        <div class="row">
          <div
            className="col-md-2"
            style={{
              backgroundColor: "#003366",
              height: "100vh",
            }}
          >
            <div
              className=""
              style={{
                marginLeft: "10px",
                marginTop: "20px",
                color: "white",
                lineHeight: "50px",
                textDecoration: "none",
              }}
            >
              <div>
                <img src={logo} alt="" />
              </div>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Link
                    to="/OrderList"
                    className="text-white text-decoration-none"
                  >
                    <FontAwesomeIcon icon={faThList} /> <span>Order List</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AddService"
                    className="text-white text-decoration-none"
                  >
                    <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/MakeAdmin"
                    className="text-white text-decoration-none"
                  >
                    <FontAwesomeIcon icon={faUsersCog} /> <span>Make Admin</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ManageService"
                    className="text-white text-decoration-none"
                  >
                    <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                  </Link>
                </li>

                <li>
                <Link
                  to="/Home"
                  className="text-white text-decoration-none"
                >
                  <FontAwesomeIcon icon={faArrowLeft} /> <span>Back To Home</span>
                </Link>
              </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10" style={{backgroundColor:'#ccd6e0' }}>
           <h3 style={{color:'#003366', marginTop:'10px'}}>Manage Service</h3>
           <div style={{width:'70px', height:'5px',backgroundColor:'#194775', marginLeft:'5px'}}></div>
           {/* body part */}
  
  <div className="mt-5" style={{marginLeft:'40px',marginRight:'30px', boxShadow:'0px 0px 6px #003366', borderRadius:'5px'}}>
  <div style={{marginLeft:'20px',marginBottom:'20px'}}>
  <p>writing section </p>
  </div>
  </div>
  
  
  
          </div>
  
        </div>
      </div>
    );
};

export default ManageService;