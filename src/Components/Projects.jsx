import React from 'react'
import AOS from 'aos';
import './style.css'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaNodeJs} from 'react-icons/fa'; 
import { TbBrandBootstrap, TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandReactNative, TbBrandRedux, TbBrandTailwind } from 'react-icons/tb';


const project = [
  
 
    {
        title : "Tripura Gramin Bank",
        desc : "As having largest branch network in Tripura, it is our endeavour to provide prompt service to the rural masses of the state",
        img: `${require('./projectImg/tripura.png')}`,
        tech : [ <TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>,<TbBrandReactNative/>,<FaNodeJs/>,<TbBrandBootstrap/>],
        repo: " ", 
        live: "https://www.tripuragraminbank.org/", 
        status :'Completed',
        handl:'I handled all Front-end tasks in this project. (All pages created)'

    },
    {
        title : "Invisible Fiction",
        desc : "We are team of gamers, artists and developers, who excels in Game Development, Virtual Reality, Augmented Reality, Machine Learning",
        img: `${require('./projectImg/gameSite.png')}`,
        tech : [ <TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>,<TbBrandBootstrap/>], 
        repo: " ", 
        live: "https://www.invisiblefiction.com/", 
        status :'Completed',
        handl:'I handled all Front-end tasks in this project. (Some pages created)'

    },  
    {
        title : "Shrishti School ",
        desc : "The school campus is located in a congenial and eco-friendly surroundings, away from the ‘hustle and bustle’ of the city",
        img: `${require('./projectImg/school.png')}`,
        tech : [ <TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>,<TbBrandReactNative/>,<FaNodeJs/>,<TbBrandBootstrap/>],
        repo: " ", 
        live: "http://www.shristi.edu.in/",
        status :'Completed', 
        handl:'I handled all Front-end tasks in this project. (All pages created)'
    },
    {
        title : "Plastic Innovation",
        desc : "Design, processing, cost-effectiveness analyzes, funding programs, feasibility studies and calculations are required to successfully develop your products.",
        img:`${require('./projectImg/plasticSite.png')}`,
        tech : [ <TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>,<TbBrandReactNative/>,<FaNodeJs/>,<TbBrandBootstrap/>],
        repo: " ", 
        live: "http://plasticinnovations.com/", 
        status :'Completed', 
        handl:'I handled all Front-end tasks in this project. (All pages created)'
    },   
    {
        title : "ARIS Insurance",
        desc : "Buy/Renew health & vehicle insurance policy online. Compare car, bike & health insurance plans from top insurers.",
        img: `${require('./projectImg/incurenc.png')}`,
        tech : [ <TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>,<TbBrandReactNative/>,<FaNodeJs/>,<TbBrandBootstrap/>],
        repo: " ", 
        live: "https://wapp.aris-world.com/",
        status :'Completed', 
        handl:'I handled all Front-end tasks in this project. (All pages created)'
    },  
    {
        title : "United Tech Solution",
        desc : "At United Tech Solution, we are passionate about providing innovative IT solutions and services to empower businesses in the digital age.",
        img: `${require('./projectImg/unitedtech.png')}`,
        tech : [ <TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>,<TbBrandReactNative/>,<FaNodeJs/>,<TbBrandBootstrap/>],
        repo: " ", 
        live: "https://unitedtechsolution.com/", 
        status :'Completed',
        handl:'I handled all Front-end tasks in this project. (All pages created)'

    }, 
    {
        title : "New Style",
        desc : "Newsytle beauty centre is very famous in Charotar district Anand Gujarat. For ladies Hair, Beauty Treatments & Bridal Makeover @newstyle_makeovers.",
        img: `${require('./projectImg/newStyle.png')}`,
        tech : [ <TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>,<TbBrandReactNative/>,<FaNodeJs/>,<TbBrandBootstrap/>],
        repo: " ", 
        live: "https://newstyle.hilabsolution.in/", 
        status :'In Development',
        handl:'I handled all Front-end tasks in this project. (All pages created)'
    },
   
    {
        title : "Jackpot Site",
        desc : "Here you can officially buy National and State lottery tickets. Pick your numbers and purchase tickets online from the comfort of your home.",
        img: `${require('./projectImg/jackpot.png')}`,
        tech : [ <TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>,<TbBrandReactNative/>,<FaNodeJs/>,<TbBrandBootstrap/>],
        repo: " ", 
        live: "http://jakpot.hilabsolution.in/", 
        status :'In Development', 
        handl:'I handled all Front-end tasks in this project. (All pages created)'
    }, 
    {
        title : "Vetmin",  
        desc : "At VetMin Nutrition, our mission is to provide top-tier solutions for animal health and enhanced productivity.  ",
        img: `${require('./projectImg/vetmin.png')}`,
        tech : [ <TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>,<TbBrandReactNative/>,<FaNodeJs/>,<TbBrandBootstrap/>],
        repo: " ", 
        live: "https://vetmin.hilabsolution.in/", 
        status :'In Development',
        handl:'I handled all Front-end tasks in this project. (All pages created)'

    },  
];

const Projects = ({theme}) => {
    useEffect(()=>{
        AOS.init({duration: 1000});  
    },[])
  return (
    <div id='project'>
        <div>
            <p class='display-3 fw-semibold my-5' data-aos="fade-up">Projects</p> 
            <div class='col-md-12 col-11 m-auto row gap-5 justify-content-center'>
            {project.map((e) => (
                    <> 
                        <div class="col-md-5   col-12  rounded-4 projectDiv   " data-aos="flip-left"  
                        style={theme?
                        {boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", background:'rgb(255, 255, 255,0.1)',color:'gray'  }
                        :
                        {boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",color:'black'  }
                        }>
                            <div class='' style={{height:'250px',marginTop:'10px'}}>
                                <img class='rounded-4 projectImg' src={e.img} style={{}} alt="project"  />
                            </div>
                            <div class= "p-3">
                                <p class='fs-1 fw-semibold'>{e.title}</p>  
                                <p class='' style={{textAlign:'justify'}}>{e.desc}</p> 
                                <p class='text-start'> <span class='fw-bold'>Tasks : </span><span>{e.handl}</span></p>
                                <div class='d-flex'>

                                <p class='text-start'> <span class='fw-bold'>Project Status : </span> <span  class={e.status == "Completed"? 'text-success fw-bold mx-2' : "text-warning fw-bold mx-2"}>{e.status}</span> </p>
                                   {e.status == "Completed" ? <a  target='_blanck' href={`${e.live}`} class=' fw-bold'>Link</a> : ""  } 
                                </div>
                                <div class=' '>
                                    < p class='fs-4 fw-semibold mt-3'  >Tech Stack</p >
                                    <div class="d-flex fs-1 gap-3 justify-content-center" style={{color:'#8D6252',marginTop:"-5px"}}>
                                        {e.tech.map((tech) => {
                                            return(
                                                <p class=''>{tech}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* <div class="d-flex gap-3 align-items-center justify-content-center my-3 ">
                                    {
                                        e.status == "Completed" ?
                                    <a style={{textDecoration:'none'}} target='_blanck' href={`${e.live}` }> 
                                        <div type="button" class="blackBtn ">
                                            <div class="blackText py-1 text-black ">View Projects</div>
                                            <div class="blackBg py-1">View Projects</div>
                                        </div>  
                                    </a> : " "
                                    }
                                </div>   */}
                            </div> 
                        </div> 
                    </>
                ))} 

            </div>

        </div>
    </div>
  )
}

export default Projects