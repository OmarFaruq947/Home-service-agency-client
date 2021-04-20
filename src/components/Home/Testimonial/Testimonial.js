import React from "react";
import PrettyRating from "pretty-rating-react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import man from '../../../images/boy.png'


const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
};

const colors = {
  star: ["#d9ad26", "#d9ad26", "#434b4d"],
};

const Testimonial = (props) => {
  const {Comment,Your_Name, Your_Location, img } = props.testimonial;

  return (

 <div className="card shadow ">
      <div className=" d-flex align-items-center">
        <img className="mx-3" src={man} alt="" width="60" />
        <div>
          <h6 style={{color: '#003366'}} >{Your_Name}</h6>
          <p className="m-0">{Your_Location}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text text-center">{Comment}</p>
      </div>
      <div className="text-center mb-3">
        <PrettyRating rating={3.5} icons={icons.star} setColors={colors.star} />
      </div>
    </div>

     
   


  );
};

export default Testimonial;
