import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/Review")
      .then((res) => res.json())
      .then((data) => setTestimonialData(data));
  }, []);

  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
          <div className="text-center mt-5 ">
            <h5 style={{ color: "#003366" }}>TESTIMONIAL</h5>
            <div
              className="mx-auto d-block mb-5"
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#003366",
              }}
            ></div>
          </div>
        </div>
        <div
          className="card-deck mt-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "20px",
          }}
        >
          {testimonialData.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
