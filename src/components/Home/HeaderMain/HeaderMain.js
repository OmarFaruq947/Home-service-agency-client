import React from "react";
import "./HeaderMain.css";
import me from "../../../images/my-pic.png";
import Typical from "react-typical";
import Ripples from "react-ripples";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-6 offset-md-1">
        <h2 style={{ color: "#3A4256" }}>
          <Typical
            steps={[
              "Hello,",
              1000,
              "Welcome Our Home Service",
              1000,
              "We Are At Your Service",
              1000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h2>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          eveniet necessitatibus et iusto corrupti minima.
        </p>
        <div
          style={{
            display: "inline-flex",
            borderRadius: 25,
            overflow: "hidden",
          }}
        >
          <Ripples color={"yellow"}>
            <button type="button" className="btn_bg_color">
              GET APPOINTMENT
            </button>
          </Ripples>
        </div>
      </div>
      <div className="col-md-4">
        <img src={me} alt="" className="img-fluid my_pic_siz " />
      </div>
    </main>
  );
};

export default HeaderMain;
