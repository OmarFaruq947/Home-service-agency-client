import React from "react";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Services from "../Services/Services";
import Project from "../Project/Project";
import Testimonials from "../Testimonials/Testimonials";
import Teams from "../Teams/Teams";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Project></Project>
      <Testimonials></Testimonials>
      <Teams></Teams>
      <Contact></Contact>
      {/* <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment> */}

      {/* <Blogs></Blogs> */}
      {/* <Doctors></Doctors> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
