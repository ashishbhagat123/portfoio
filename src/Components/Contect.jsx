import React from 'react'
import './style.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaLocationArrow, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import swal from 'sweetalert';

import emailjs from "emailjs-com"

const Contact = ({theme}) => {

    const linkedin = () => {
        window.open("https://www.linkedin.com/in/lokeshnimje", "_blank")
    }
    const github = () => {
        window.open("https://github.com/lokeshnimje", "_blank")
    }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_h1pag46', 'template_k1w5n4q', e.target, 'wmH7E-1hPFAwxJwh3')
          .then((result) => {
            swal("Thanks for contacting me!", result.text, "success");
          }, (error) => {
            swal("Oops, Something went wrong!, Plesase try to reach via Phone no.", error.text, "error");
          });
          e.target.reset() 
      }

  return (
    <div id='contact'>
        <div class='col-md-12 col-11 m-auto my-5 '>
            <p class='display-3 fw-semibold my-5'  data-aos="fade-up">Contact Me</p>
            <div class='row col-12 m-0  gap-5 justify-content-center'>

                <div class='col-lg-5 col-11  rounded-4   p-0  ' data-aos="flip-left"  style={theme ? {boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",background:'rgb(128,128,128,0.2)'}:{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",color:'black'}} >
                    <div class='col-12  m-0 rounded-4'> 
                        <div class='p-3 rounded-4 ' style={theme?{background:'rgb(128,128,128,0.2)'}:{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",color:'black'}}  > 
                            <p class='fs-5 my-3'>If you are an employer looking for a dedicated web developer, feel free to drop me a message.</p>
                        </div>
                        <div class=' p-3'>
                            <form onSubmit={sendEmail}> 
                                <input type="text" class='form-control mt-3 border-2' placeholder='Name' name="to_name" style={{background:'transparent'}} />
                                <input type="text" class='form-control mt-3  border-2' placeholder='Email' name="from_name" style={{background:'transparent'}} /> 
                                {/* <input type="text" class='form-control mt-3  border-2' placeholder='Organization' name="from_name" style={{background:'transparent'}} /> */}
                                <textarea type="text" class='form-control mt-3  border-2' placeholder='Enter your message here' name="message"style={{background:'transparent'}} />
                                <input class={theme ?"btn btn-light submit my-3 p-1 form-control": "btn btn-dark submit my-3 p-1 form-control"} type="submit" value="SUBMIT" style={{transition:'2s'}} />
                              
                                
                            </form>

                        </div>
                        <br />
                    </div>
                </div>
                <div class='col-lg-5 col-11  p-0 rounded-4  ' data-aos="flip-right" style={theme ? {boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",background:'rgb(128,128,128,0.2)'}:{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",color:'black'}}>
                    <div class='col-12 m-auto m-0 rounded-4 '  >
                         <div class='p-3 text-center rounded-4' style={theme?{background:'rgb(128,128,128,0.2)'}:{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",color:'black'}} >
                                <p class='fs-5 fw-bold'>Get In Touch</p>
                                <div class='d-flex gap-3 justify-content-center'>
                                    <p class='fs-1' onClick={github} style={{cursor:'pointer'}}><BsGithub/></p>
                                    <p class='fs-1 ' onClick={linkedin} style={{cursor:'pointer',color:'#0A66C2'}}><BsLinkedin/></p>
                                </div>
                        </div>
                        <div class='  text-start py-4' >
                            <div class='col-sm-10 row m-auto fs-5 mt-4'> 
                                <div class='d-flex align-items-center row'>
                                    <div class='col-sm-1 col-12'><FaUserAlt style={{marginRight:'20px'}}/></div>
                                    <div class='col-sm-11 col-12'>Ashish Bhagat</div> 
                                </div>  
                            </div>
                            <div class='col-sm-10 row m-auto fs-5 mt-4'> 
                            <div class='d-flex align-items-center row'>
                                    <div  class='col-sm-1 col-12'><MdEmail style={{marginRight:'20px'}}/></div>
                                    <div class='col-sm-11 col-12'>abhagat629@gmail.com</div> 
                                </div>  
                            </div>
                            <div class='col-sm-10 row m-auto fs-5 mt-4'> 
                            <div class='d-flex align-items-center row'>
                                    <div  class='col-sm-1 col-12'><FaPhoneAlt style={{marginRight:'20px'}}/></div>
                                    <div class='col-sm-11 col-12'>+91 7204183942</div> 
                                </div>  
                            </div>
                            <div class='col-sm-10 row m-auto fs-5 my-4'> 
                            <div class='d-flex align-items-center row'>
                                    <div  class='col-sm-1 col-12'><FaLocationArrow style={{marginRight:'20px'}}/></div>
                                    <div class='col-sm-11 col-12'>Bangalore, India</div> 
                                </div>  
                            </div>  
                        </div>
                        <br />
                       
                    </div>
                </div>


            </div>

        </div>

        <div class='p-2' style={theme? {borderTop:'0.5px solid gray'}:{borderTop:'0.5px solid black'}}> 
           <p>Developed by <span class='fw-bold'>Ashish Bhagat</span> </p>
           {/* <p>Developed by <span class='fw-bold'>Lokesh Nimje</span> </p> */}

        </div>
    </div>
  )
}

export default Contact