import React, { useContext, useState } from "react";
import "./ServiceDetail.css";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";


const ServiceDetail = ({ service }) => {

  const [loggedInUser ,Service_infoObject ] = useContext(UserContext);
 
  const {handleSubmit } = useForm();

  const onSubmit = () => {

    const Service_infoObject=[
      {
        Service_Name : service.data.Name,
        Service_img : service.productImg,
        Service_Price : service.data.Price,
        Service_Description : service.data.Comment,
      }
    ]
console.log('clicked...',Service_infoObject);
  };




  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className="col-md-4 text-center serviceDetailsCard " >
    {/* <div > */}
      <img className="mt-5  service_img" src={service.productImg}/>
      <h4 className="mt-3 mb-3">{service.data.Name}</h4>
      <h5 style={{ color: "#003366" }}>${service.data.Price}</h5>
      <p className="text-secondary">{service.data.Comment}</p>
      
      <Link to="/Book">
        <div
          className="mb-2"
          style={{
            display: "inline-flex",
            borderRadius: 25,
            overflow: "hidden",
          }}
        >
          <Ripples color={"yellow"}>
            <button type="submit" className="btn_bg_color_about">
              Take Service
            </button>
          </Ripples>
        </div>
      </Link>
    {/* </div> */}
    </form>
  );
};

export default ServiceDetail;
