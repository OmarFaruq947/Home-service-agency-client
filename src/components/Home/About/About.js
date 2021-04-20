import React from "react";
import './About.css';
import my_Second_pic from '../../../images/me-2.png';
import Ripples from "react-ripples";

const About = () => {
  return (
    <div>
      <div class="container">
      <div className="text-center mt-5">
                <h5 style={{color: '#003366'}}>ABOUT</h5>
               <div className="mx-auto d-block mb-5" style={{width:'40px', height:'3px', backgroundColor:'#003366'}}></div>
            </div>
        <div class="row">
          <div className="col">
              <img className="mx-auto d-block" src={my_Second_pic} alt=""/>
          </div>
          <div className=" col align-self-center">

                        <h1 style={{color:'#003366'}} >Who Am I...</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <div
          style={{
            display: "inline-flex",
            borderRadius: 25,
            overflow: "hidden",
          }}
        >
          <Ripples color={"yellow"}>
            <button type="button" className="btn_bg_color_about">
          Learn More
            </button>
          </Ripples>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
