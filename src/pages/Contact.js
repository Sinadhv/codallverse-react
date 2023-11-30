import React from 'react'
import Header from '../components/Header'
function Contact (){
 return (
  <div>
   <Header />
   <div className="container contact ">
    <div className="row pt-5">
     <div className="col-md-6">
        <img src="./Instagram_Box_Filled_L Shadowless@0.2x.png" alt="" />
        <img src="./Instagram_Box_Filled_L Shadowless@0.2x.png" alt="" />
        <img src="./Instagram_Box_Filled_L Shadowless@0.2x.png" alt="" />
     </div>
     <div className="col-md-6">
         <div className='contact-form m-2 p-5 n-box2'>
            
            <h3 className='font-bold'>Contact US</h3>
            <hr />
            <input type="text"  className='form-control' placeholder='Name'/>
            <input type="text"  className='form-control' placeholder='Name'/>
            
            <textarea className='form-control' rows={3} defaultValue={""}></textarea>

            <button className='primery-button mt-3'>SUBMIT</button>
         </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Contact 