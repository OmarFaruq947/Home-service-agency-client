import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCartPlus,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../../images/logoWithNoBackground-remove.png";
import { faRev } from "@fortawesome/free-brands-svg-icons";
import Ripples from "react-ripples";
import reviewPic from "../../../images/reviewPic.png";
import { useForm } from "react-hook-form";


const Review = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fetch("https://safe-ocean-57547.herokuapp.com/Review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Review created successfully.");
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
                <Link to="/Book" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span>
                </Link>
              </li>
              <li>
                <Link to="/Booking" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faStream} /> <span>Booking List</span>
                </Link>
              </li>
              <li>
                <Link to="/Review" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faRev} /> <span>Review</span>
                </Link>
              </li>
              <li>
                <Link to="/Home" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faArrowLeft} />{" "}
                  <span>Back To Home</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-10" style={{ backgroundColor: "#ccd6e0" }}>
          <h3 style={{ color: "#003366", marginTop: "10px" }}>Review</h3>
          <div
            style={{
              width: "70px",
              height: "5px",
              backgroundColor: "#194775",
              marginLeft: "5px",
            }}
          ></div>
          {/* body part */}

          <div
            className="mt-5"
            style={{
              marginLeft: "40px",
              marginRight: "30px",
              boxShadow: "0px 0px 6px #003366",
              borderRadius: "5px",
            }}
          >
            <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
              {/* booking system start */}

              <div class="row">
                <div class="col-md-6">
                  <form class="row g-3 " onSubmit={handleSubmit(onSubmit)}>
                    <div class="col-md-12">
                      <label for="inputEmail4" class="form-label mt-3">
                        Your Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        ref={register({ required: true })}
                        name="Your_Name"
                      />
                      {errors.Your_Name && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div class="col-md-12">
                      <label for="inputEmail4" class="form-label mt-3">
                        Your Location
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        ref={register({ required: true })}
                        name="Your_Location"
                      />
                      {errors.Your_position && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div class="form-floating col-md-12">
                      <label className="mt-3">Comments</label>
                      <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        ref={register({ required: true })}
                        name="Comment"
                      ></textarea>
                      {errors.Comment && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>

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
                            SUBMIT
                          </button>
                        </Ripples>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-md-6">
                  <img
                    className="mt-4"
                    style={{ width: "500px" }}
                    src={reviewPic}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
