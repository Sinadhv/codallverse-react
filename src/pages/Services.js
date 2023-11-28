import React from 'react'
import Header from '../components/Header'
import servicesdata from './servicesdata'
function Services (){
 return (
  <div>
   <Header/>
   <div className='services-intro' style={{backgroundImage:`url('./blob-scene-haikei.svg')`}}>
   <div className='services-intro-content'>
    <h1>Codallverse Services</h1>
    <div>
     <p>
     " Beautiful and modern website design and SEO services and other website services and UI/UX graphic design and WordPress website design and also Android application design in web platform"
    </p>
    </div>

    <button className='primery-button'>GET STARTED</button>
   </div>
   </div>

   <div className='why-codallverse-parent'>
    <div className='why-codallverse n-box1 flex-with-center'>
         <h1>Why Codallverse ?!</h1>
         <div className='why-codallverse-content'> 
         <p>simple ...</p>
         
         <p>We Know how to kiss ...</p>
         
         <p> No No No ... Not that kiss</p>
         
         <p>We Know how to</p>         

         <p>Keep It Straight , Simple</p>
         </div>

    </div>
   </div>

   <div className='container services-list'>
     <h3 className='font-bold'>Take a look of our services</h3>
     <hr />
     <div className='row'>
      {servicesdata.map(services=>{
       return <div className="col-md-4">
        <div className='position-relative services'>
         <img src={services.image} alt=""  className='w-100'/>
         <div className='services-content w-100'>
          <h3>{services.title}</h3>
          <hr />
          <p>{services.description}</p>
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

export default Services 