import React from 'react'
import Header from '../components/Header'
import {FaLaptopCode} from 'react-icons/fa'
import projectsdata from "./projectsdata"

function Projects (){
 return (
  <div>
   <Header />
   <div className='container projects-intro'>
    <div className="row flex-with-center mt-5">
     <div className="col-md-6 n-box2 px-3 py-5">
       <div>
        <h1 className='font-bold'>Projects</h1>
        <p className='font-bold'>Good ideas are not adopted automatically. They must be driven into practice with courageous patience</p>
        <button className='primery-button'>Get Started</button>
       </div>
     </div>
     <div className="col-md-6 position-relative">

       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#0F62FE" d="M41.3,-48.8C53.9,-38.6,64.8,-26,68.6,-11.1C72.3,3.7,69,20.8,60.7,35C52.4,49.2,39.3,60.5,23.9,66.5C8.5,72.5,-9.2,73.3,-22.2,66.3C-35.2,59.3,-43.5,44.6,-53.4,29.7C-63.4,14.9,-74.9,-0.2,-72.7,-12.8C-70.5,-25.5,-54.5,-35.7,-40.1,-45.6C-25.7,-55.5,-12.9,-65,0.7,-65.9C14.3,-66.8,28.6,-59,41.3,-48.8Z" transform="translate(100 100)" />
</svg>

<FaLaptopCode 
color='white'
size={200}
className='position-absolute top-50 start-50 translate-middle'/>

     </div>
    </div>
   </div>
   <div className='container project-list'>
     <h3 className='font-bold'>Take a look of our projects</h3>
     <hr />
     <div className='row'>
      {projectsdata.map(project=>{
       return <div className="col-md-4">
        <div className='position-relative project'>
         <img src={project.image} alt="" />
         <div className='project-content'>
          <h3>{project.title}</h3>
          <hr />
          <p>{project.description}</p>
          <button className='primery-button'>DEMO</button>
         </div>
        </div>
       </div>
      })}
     </div>
   </div>
  </div>
 )
}

export default Projects 