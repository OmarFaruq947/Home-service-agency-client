import React from 'react';
import Team from '../Team/Team';
import CEO from '../../../images/CEO.png';
import Secretary from '../../../images/secretary.png';
import Manager from '../../../images/Maneger.png';


const TeamInformation=[
{
    img:CEO,
    name:'Omar Faruq',
    phone:'+88xxx78453215',
    status:'CEO'
},
{
    img:Secretary,
    name:'Jon Smit',
    phone:'+88xxx78453215',
    status:'Secretary'
},
{
    img:Manager,
    name:'Musaddik',
    phone:'+88xxx78453215',
    status:'Manager'
}
] 


const Teams = () => {
    return (
        <section className="my-5 py-5">
           <div className="container">
               <div className="text-center mt-5 ">
                <h5 style={{color: '#003366'}}>HOUR TEAM</h5>
               <div className="mx-auto d-block mb-5" style={{width:'60px', height:'3px', backgroundColor:'#003366'}}></div>
            </div>

               <div className="card-deck">
                    {
                        TeamInformation.map(teamInfo => <Team  teamInfo={teamInfo}></Team>)

                    }
                </div>
           </div>
       </section>
    );
};

export default Teams;