import React from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header'


function Home (){
 return (
  <div className='like-body'>
   <Header />
   <div className="introduction flex-with-center" style={{backgroundImage: `url('./circle-scatter-haikei.png')`}}>

    <div>
      <h1>CODALLVERSE</h1>
       <div className="intro-content d-flex justify-content-between">
         <p>Design Web  <br/> Seo , Web App</p>
         <button className='primery-button font-bold'>Get started</button>
       </div>
    </div>


   </div>
      <Carousel />

      

      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className='n-box2 p-5 font-bold'>
              <h1>Yes you are right ...</h1>
              <br/>
              <p>I am a JavaScript Buff ...</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img src="https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?w=1380&t=st=1699784297~exp=1699784897~hmac=850e34298d1a48fd4e542a32fd88965ddf15f6a8e584686ab72e33220744f477" alt="" height="200" className= "w-100" />
            </div>
          </div>
        </div>

         <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className='n-box2 p-5 font-bold'>
              <p>JavaScript is one of the most top-ranked programming languages because of its ubiquitous use on all platforms and ass adoption . Main Use Cases: Web Development .</p>
            </div>
          </div>
        </div>
      </div>

      <div className="devstack container my-5 n-box2 py-5">
        <div className='text-center'>
          <h3 className='font-bold text-center'>My Development Stack</h3>

          <hr />

        <img src="https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-251.jpg?w=996&t=st=1699788092~exp=1699788692~hmac=a0ece5c65a752c431352e8bedb924ce109b0c6df5ff7f462ccb5998d8c157bc7" alt=""  height='200' width='200' className='text-center'/>
        </div>
        <div className="row">
          <div className="row-col col-md-4">
            <div className='font-bold text-center'>
              <h3 className='font-bold'>Front End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>JavaScript</p>
              <p>Angular</p>
              <p>ReactDOM</p>
              <p>Redux</p>
              <p>NextJs</p>
            </div>
          </div>

          <div className="row-col col-md-4">
            <div className='font-bold text-center'>
              <h3 className='font-bold'>UI/Styling</h3>
              <hr />
              <p>Tailwind CSS</p>
              <p>Material UI</p>
              <p>BootStrap</p>
              <p>AntDesign</p>
              <p>Semantic UI</p>
              
            </div>
          </div>

          <div className="row-col col-md-4">
            <div className='font-bold text-center'>
              <h3 className='font-bold'>Backend/DB</h3>
              <hr />
              <p>Node JS</p>
              <p>Express</p>
              <p>PHP</p>
              <p>Python</p>
              <p>Mongo DB</p>
              
            </div>
          </div>
        </div>
      </div>

         <center> <div className='who-is-codallverse flex-with-center' >

            <div className='text-start'>
              <h3>Hello</h3>
              <hr />
              <p><pre>{JSON.stringify({
                coName:"Codallverse",
                from : "Iran , palestine St " ,
                numEmploee : "10",
                dateOfEstablishment : "1402"
                
              } , null , 2)}</pre></p>
            </div>

          </div></center>

  </div>
 )
}

export default Home 