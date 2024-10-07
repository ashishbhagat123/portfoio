import React, { useEffect } from 'react'
import Typed from 'react-typed';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = ({theme}) => {

    const resume = () => {
        window.open("https://drive.google.com/file/d/1S8jr9zzcrkcSDojU6WACS2A0MoztG2gt/view?usp=sharing", "_blank")
    }
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/ashish-bhagat-07/", "_blank")
    }
    const github = () => {
        window.open("https://github.com/ashishbhagat123", "_blank")
    }

    useEffect(()=>{
        AOS.init({duration: 1000});  
    },[])
  return (
    <div id='home'> 
    <div style={{height:'20vh'}}></div>
        <div class='col-12 row align-items-center gap-5  m-0'>
            <div class='col-md-6 col-12'>
                <div class=' col-md-8  col-9 m-auto '> 
                    <img data-aos="zoom-in"   src="https://ashishbhagat.netlify.app/static/media/my_pic.4f9e25b6.jpg" alt="profile" style={theme?{width:'100%',borderRadius: "20px", boxShadow: 'rgba(255,255,255,0.25) 150px 50px 200px -50px,rgba(255, 255, 255, 0.733) 0px 30px 60px -30px'}:{width:'80%', height: "80%",borderRadius: "20px", boxShadow: 'rgba(50,50,93,0.25) 50px 50px 100px -50px,rgba(0, 0, 0, 0.733) 0px 30px 60px -30px' }} />
                </div>
            </div>
            <div class='col-md-5 col-12'>
                <div class='col-10 m-auto text-start'> 
                    <p class='fs-1 fw-semibold' data-aos="fade-up">Hello I'm</p>
                    <p class='fs-1 fw-bold   ' style={{color:'red'}} data-aos="fade-up">Ashish Bhagat</p>
                    <p class='fs-2 fw-semibold' data-aos="fade-up"> 
                    <span>I'm a </span> <br />
                        <Typed
                        strings={["Front-End  Developer.","React JS Developer.","UI Developer."]}
                        typeSpeed={40} 
                        backSpeed={50}
                        loop 
                        />
                    </p>
                    <p class='fs-4' data-aos="fade-up">
                    <Typed
                        strings={[" I am passionate about building challenging projects and excelling in their development, and looking forward to create a mark for myself as a Software Developer."]}
                        typeSpeed={20}  
                        /> 
                    </p>
                    
                    <div class='d-flex gap-3 justify-content-center align-items-center' data-aos="fade-up"> 
                        <p class='fs-1' style={{cursor:'pointer'}}onClick={github} ><BsGithub/></p>
                        <p class='fs-1 ' style={{cursor:'pointer',color:'#0A66C2'}}onClick={linkedin} ><AiFillLinkedin/></p>
                        <div type="button" class={theme? "whiteBtn mt-2":"blackBtn mt-2"}>
                            <div class={theme ? "whiteText p-2 py-1" :"blackText p-2 py-1"} onClick={resume}>View Resume</div>
                            <div class={theme ? "whiteBg p-2 py-1": "blackBg p-2 py-1"}>View Resume</div>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home