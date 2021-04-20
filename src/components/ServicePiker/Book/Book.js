import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
    faCartPlus,
    faCreditCard,
    faStream,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../../images/logoWithNoBackground-remove.png";
import { faCcPaypal, faRev } from '@fortawesome/free-brands-svg-icons';
import Ripples from "react-ripples";
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
const Book = () => {



  const [loggedInUser,Service_infoObject] = useContext(UserContext);

console.log('bookData.',Service_infoObject.Service_Name)

  const { register, handleSubmit } = useForm();

  
  const onSubmit = (data) => {
    const url = `https://safe-ocean-57547.herokuapp.com/OrderList`
    console.log(data)
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({data}),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Add Service created successfully.");
        }
      });
  };

    return (
        <div>
      <div class="row">
        <div
          className="col-md-2"
          style={{
            backgroundColor: "#003366",
            height: "120vh",
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
                  to="/Book"
                  className="text-white text-decoration-none"
                >
                  <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Booking"
                  className="text-white text-decoration-none"
                >
                  <FontAwesomeIcon icon={faStream} /> <span>Booking List</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Review"
                  className="text-white text-decoration-none"
                >
                  <FontAwesomeIcon icon={faRev} /> <span>Review</span>
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
         <h3 style={{color:'#003366', marginTop:'10px'}} >Book</h3>
         <div style={{width:'70px', height:'5px',backgroundColor:'#194775', marginLeft:'5px'}}></div>
         {/* body part */}

<div className="mt-5" style={{marginLeft:'40px',marginRight:'30px', boxShadow:'0px 0px 6px #003366', borderRadius:'5px'}}>
<div style={{marginLeft:'20px',marginBottom:'20px'}}>

{/* booking system start */}


<form class="row g-3  col-md-6 "onSubmit={handleSubmit(onSubmit)}>
<div class="col-md-12">
    <label for="inputEmail4" class="form-label mt-3">Your Name</label>
    <input type="text" class="form-control" value={loggedInUser.name}  ref={register({ required: true })} />
  </div>
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Your Email</label>
    <input type="email" class="form-control" value={loggedInUser.email}  ref={register({ required: true })}/>
  </div>

  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Service Name</label>
    <input type="text" class="form-control"  ref={register({ required: true })}/>
  </div>

  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Service Price</label>
    <input type="text" class="form-control"  ref={register({ required: true })}/>
  </div>

  <p className="ml-3">Pay with</p>
  <div class="form-check form-check-inline  mt-4">
  
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"  ref={register({ required: true })}/>
  <label class="form-check-label" for="inlineCheckbox1" required><span style={{fontSize:'20px'}}>Paypal <FontAwesomeIcon icon={faCcPaypal} /></span></label>
</div>
<div class="form-check form-check-inline mt-4">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"  ref={register({ required: true })}/>
  <label class="form-check-label" for="inlineCheckbox2"><span style={{fontSize:'20px'}}>Credit Card <FontAwesomeIcon icon={faCreditCard} /></span></label>
</div>
<div class="col-md-12">
    <label for="inputEmail4" class="form-label">Card Number</label>
    <input type="number" class="form-control"  ref={register({ required: true })}/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Date</label>
    <input type="date" class="form-control"  ref={register({ required: true })}/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">CVC</label>
    <input type="text" class="form-control"  ref={register({ required: true })}/>
  </div>

<h5 className="mt-3 ml-3" >Your service charged will be  $ </h5>
  <div class="col-12 mt-3 mb-5">
  <div
          style={{
            display: "inline-flex",
            borderRadius: 25,
            overflow: "hidden",
          }}
        >
          <Ripples color={"yellow"}>
            <button type="submit" className="btn_bg_color_about">
          PAY
            </button>
          </Ripples>
       </div>
  </div>
</form>







</div>
</div>



        </div>

      </div>
    </div>
    );
};

export default Book;