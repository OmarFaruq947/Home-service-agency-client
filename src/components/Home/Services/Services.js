import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import Ripples from "react-ripples";


const Services = () => {

  const [serviceData,setServiceData] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:4000/addService')
    .then(res => res.json())
    .then(data => setServiceData(data))
  },[])


  return (
    <section className="services-container" style={{marginTop:'150px'}}>
      <div className="text-center">
        <div className="text-center">
          <h5 style={{ color: "#003366" }}>Service</h5>
          <div
            className="mx-auto d-block mb-3"
            style={{ width: "40px", height: "3px", backgroundColor: "#003366" }}
          ></div>
        </div>
        <h2 style={{ color: "#003366" }}>
          We're an agency tailored to all
          <br />
          client's needs that always delivers
        </h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row pt-5">
          {serviceData.map((service) => (
            <ServiceDetail service={service} key={service.name}></ServiceDetail>
          ))}
        </div>
      </div>
      <div
        className="d-flex justify-content-center mt-5"
        style={{
          display: "inline-flex",
          borderRadius: 25,
          overflow: "hidden",
        }}
      >
        <Ripples color={"yellow"}>
          <button type="button" className="btn_bg_color_about">
            Explore More
          </button>
        </Ripples>
      </div>
    </section>
  );
};

export default Services;
