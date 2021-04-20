import React from 'react';
import electricity from '../../../images/electrisianProject.jpg'; 
import Grocery from '../../../images/GroceryProject.jpg'; 
import healthService from '../../../images/healthServiceProject.jpg'; 
import ProjectDetails from '../ProjectDetails/ProjectDetails';


const ProjectInformation=[
    {
        img:healthService,
        title:'Healt Service At home in COVID Period',
        description:'Fame ah is and he would A la de las veces que la tierra los, pensamiento los sus es larga los.dares heart his a.'
    },
    {
        img:Grocery,
        title:'Grocery Delivery At home in COVID Period',
        description:'Manche ich labyrinthisch steigt zerstreuet versuch ich was lebens ich ertönt. Äolsharfe die drängt gut.'
    },
    {
        img:electricity,
        title:'Any Electric solution At home in COVID Period',
        description:'Kaj la pli li mi kiun bruto. Havigi pliagxante por niajn ili terbordo ke neniu.'
    }
    ]


const Project = () => {
    return (
        <section className="my-5 py-5">
        <div className="container">
            <div className="text-center mt-5 ">
             <h5 style={{color: '#003366'}}>HOUR PROJECT</h5>
            <div className="mx-auto d-block mb-5" style={{width:'60px', height:'3px', backgroundColor:'#003366'}}></div>
         </div>

            <div className="card-deck">
                 {
                     ProjectInformation.map(ProjectInfo => <ProjectDetails  ProjectInfo={ProjectInfo}></ProjectDetails>)

                 }
             </div>
        </div>
    </section>
    );
};

export default Project;