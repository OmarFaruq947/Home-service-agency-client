import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Team = ({teamInfo}) => {
   
    return (
        <div className="card shadow">
      <div className="text-center">
        <img className="" src={teamInfo.img} alt="" width="300" />
        <h4 style={{color: '#003366'}} >{teamInfo.name}</h4>
          <h6>{teamInfo.status}</h6>
          <p> <FontAwesomeIcon icon={faPhoneAlt} /> {teamInfo.phone}</p>
      </div>
    </div>
    );
};

export default Team;