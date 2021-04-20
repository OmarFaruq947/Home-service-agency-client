import React, { useState } from "react";
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
import Ripples from "react-ripples";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddService = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  // file upload section
  const handleImageUpload = event =>{
    const imageData = new FormData();
    imageData.set('key', '69e40a539b4031cb260b51b897363362');
    imageData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',imageData)
    .then(function(response){
      setImageURL(response.data.data.display_url);
    })
    .catch(function(error){
      console.log(error);
    })
  }
  // file upload section end

  
  const onSubmit = (data) => {
    const productImg = {
      imageURL:imageURL
    };
    const url = `http://localhost:4000/addService`
    console.log(data)


    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({data, productImg:imageURL}),
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
                <Link to="/Home" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span>Back To Home</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-10" style={{ backgroundColor: "#ccd6e0" }}>
          <h3 style={{ color: "#003366", marginTop: "10px" }}>Add Service</h3>
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
              <div class="col-md-12">
                <form class="row g-3 " onSubmit={handleSubmit(onSubmit)}>
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label mt-3">
                      Service Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      ref={register({ required: true })}
                      name="Name"
                    />
                    {errors.Name && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label mt-4">
                      Service Price
                    </label>
                    <br />
                    <input
                      type="text"
                      ref={register({ required: true })}
                      name="Price"
                    />
                    <br />
                    {errors.Price && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div class="col-md-6">
                    <label For="inputEmail4" class="form-label mt-4">
                      Service picture
                    </label>
                    <br />
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      name="files"
                    />
                    <br />
                    {errors.files && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div class="form-floating col-md-12">
                    <label className="mt-3">Service description</label>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
