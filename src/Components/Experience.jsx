import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {Link} from "react-scroll"

const experience = [

      {
        title: "Frontend Developer",
        company: "Grappus",
        time: "July 2021",
        desc: `Grappus is a product development studio that blends the roles of a creative agency, engineering firm, and consultancy. They specialize in helping both established brands and startups with custom technology solutions. Their expertise includes product design, strategy, branding, and engineering. Grappus is known for its focus on user experience (UX) and design-driven development, often working on diverse projects like app development, UX/UI design, and digital transformation.`,
        img: "https://www.grappus.com/static/og.png",
        role_and_Responsibility: [
          "Created user-friendly and responsive front-end interfaces using React and Redux.",
          "Migrated the internal dashboard, following microservices architecture to facilitate smooth transitions and future scalability.",
          "Collaborated with team remotely and developing feature with better approach.",
        ],
        TechStacks :  ["React","Redux","Next js", "TypeScript","JavaScript", "AntDesign", "Material UI"],                                                                                                                                                                                                                                      
      },  
];

const Experience = ({theme}) => {
    useEffect(()=>{
        AOS.init({duration: 1000});  
    },[])
  return (
    <div id='experience'> 
    <br /><br />
        <div>
            <p class='display-3 fw-semibold'  data-aos="fade-up">Experience</p>

            <div>
                {experience.map((e)=>{
                    return(
                        <div class='col-sm-10 col-11 m-auto row my-5 align-items-center rounded-4' data-aos="flip-right"  style={theme?
                            {boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", background:'rgb(255, 255, 255,0.1)',color:'gray'  }
                            :
                            {boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",color:'black'  }
                            }>
                              
                                <div class='col-md-5 col-12'>
                                    <div class='mt-3' data-aos="zoom-in" data-aos-duration="2000">
                                        <img class='rounded-4' style={{ width: '100%', height: '100%'}} src= {e.img} alt={e.img} />

                                        {/* <Link activeClass="active"
                                            to="project"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500} style={{textDecoration:'none',color:'black',cursor:'pointer'}}>

                                            <div type="button" class="blackBtn m-auto mt-3">
                                                <div class="blackText p-3 py-1">View Projects</div>
                                                <div class="blackBg p-3 py-1">View Projects</div>
                                            </div>
                                        </Link> */}
                                    </div>
                                </div>
                                <div class='col-md-6 col-12 text-start'>
                                    <div class='my-3'> 
                                        <p><span class='fs-3 fw-semibold'>{e.title}</span></p>
                                        <p><span class='fs-4 fw-semibold'>{e.company}</span></p>
                                        <p class='text-end  fw-semibold'>{e.time}</p>
                                        <p class='fs-6' style={{textAlign:'justify'}}>{e.desc}</p> 
                                        <p class='fw-semibold mt-2 fs-5'>Tech Stacks -</p>
                                        <p class='fs-6' style={{textAlign:'justify'}}>{e.TechStacks.join(", ")}</p>
                                        <p class='fw-semibold mt-2 fs-5'>Role and Responsibility -</p>
                                        <ul class='m-0'> 
                                            {e.role_and_Responsibility.map((el) => (
                                            <li class='fs-5' style={{ listStyle:"block",listStyleType:"square"}}> {el}</li>
                                            ))} 
                                        </ul>   
                                        {/* <div type="button" class="blackBtn mt-2">
                                            <div class="blackText p-2 py-1">View Projects</div>
                                            <div class="blackBg p-2 py-1">View Projects</div>
                                        </div> */}
                                    </div>
                                </div> 
                             
                        </div>
                    )
                })}

            </div>

        </div>
    </div>
  )
}

export default Experience