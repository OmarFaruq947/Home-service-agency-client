import React from "react";
import Ripples from "react-ripples";
import contact_pic from '../../../images/contact_pic.png';
const Contact = () => {
  return (
    <section className="contact my-5 py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="text-center mt-5 ">
            <h5 style={{ color: "#003366" }}>CONTACT</h5>
            <div
              className="mx-auto d-block mb-3"
              style={{
                width: "40px",
                height: "3px",
                backgroundColor: "#003366",
              }}
            ></div>
          </div>
          <h1 style={{ color: "#003366" }}>
            Let us handle your
            <br />
            project, professionally
          </h1>
        </div>

        <div class="row">
          <div class="col">

             <img src={contact_pic} style={{width:'500px'}} alt=""/>

          </div>
          <div class="col">
          <div className=" mx-auto">
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name*"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject *"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                className="form-control"
                id=""
                cols="30"
                rows="5"
                placeholder="Message *"
              ></textarea>
            </div>
            <div className="form-group text-center">
              <div
                style={{
                  display: "inline-flex",
                  borderRadius: 25,
                  overflow: "hidden",
                }}
              >
                <Ripples color={"yellow"}>
                  <button type="button" className="btn_bg_color_about">
                    Send Message
                  </button>
                </Ripples>
              </div>
            </div>
          </form>
        </div>

          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;
