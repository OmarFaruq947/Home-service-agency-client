import React from 'react';
import Ripples from "react-ripples";

const ProjectDetails = ({ProjectInfo}) => {
    return (
        <div className="card shadow">
        <div className="text-center p-3">
          <img className="" src={ProjectInfo.img} alt="" width="300" />
          <h4 style={{color: '#003366'}} >{ProjectInfo.title}</h4>
          <p>Les les aux des flots des a fleurs  aux a, et nuit îles fleuves les comme jaurais voguais. Les.</p>
          <div
          className="mb-2"
          style={{
            display: "inline-flex",
            borderRadius: 25,
            overflow: "hidden",
          }}
        >
          <Ripples color={"yellow"}>
            <button type="button" className="btn_bg_color_about">
          Read Details
            </button>
          </Ripples>
        </div>
        </div>
      </div>
    );
};

export default ProjectDetails;