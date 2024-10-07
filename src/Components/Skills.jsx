import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import { FaNodeJs, FaGitAlt, FaAws} from 'react-icons/fa'; 
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandMysql, TbBrandTypescript, TbBrandNextjs } from 'react-icons/tb';
import { SiGraphql, SiReact, SiRedux, SiAntdesign, SiMui, SiExpress, SiWebpack } from 'react-icons/si';




const Skills = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});  
    },[])
  return (
    <div style={{backgroundColor:'rgba(-2, -2, -5, 0.05)', overflow: 'hidden'}} id='skills'>
        <br />
        <p class='display-3 fw-semibold my-5'   data-aos="fade-up">Tech Skills</p> 

        <div class='row col-10 m-auto justify-content-around'>
            <div class='col-md-3 col-6 ' data-aos="fade-right">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><SiReact/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>React </p>
            </div>
            <div class='col-md-3 col-6 ' data-aos="fade-left">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><SiRedux/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>Redux</p>
            </div>
            <div class='col-md-3 col-6 ' data-aos="fade-right">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><TbBrandNextjs /></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>Next JS</p>
            </div>
            <div class='col-md-3 col-6 ' data-aos="fade-right">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><SiExpress/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>Express JS</p>
            </div>
            <div class='col-md-3 col-6 ' data-aos="fade-left">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><TbBrandJavascript/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>Java Script</p>
            </div> 
            {/* <div class='col-md-3 col-6 ' data-aos="fade-right">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><TbBrandTypescript/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>TypeScript</p>
            </div>   */}
            <div class='col-md-3 col-6 ' data-aos="fade-right">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><TbBrandHtml5/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>HTML</p>
            </div>
            <div class='col-md-3 col-6 ' data-aos="fade-left">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><TbBrandCss3/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>CSS</p>
            </div> 
            {/* <div class='col-md-3 col-6 ' data-aos="fade-left">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><TbBrandMysql/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>SQL</p>
            </div> */}
            <div class='col-md-3 col-6 ' data-aos="fade-right">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><FaNodeJs/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>Node JS</p>
            </div>
            <div class='col-md-3 col-6 ' data-aos="fade-left">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><SiAntdesign/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>Ant Design</p>
            </div>
            <div class='col-md-3 col-6 ' data-aos="fade-left">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><SiMui/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>MaterialUI</p>
            </div>
            <div class='col-md-3 col-6 ' data-aos="fade-left">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><FaGitAlt/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>Git</p>
            </div>
            <div class='col-md-3 col-6 ' data-aos="fade-right">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><FaAws/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>AWS</p>
            </div> 

            {/* <div class='col-md-3 col-6 ' data-aos="fade-right">
                <p class=' ' style={{fontSize:'100px',color:'#8D6252'}}><SiAntdesign/></p>
                <p class='fs-5 fw-bold' style={{marginTop:'-15px'}}>Ant design</p>
            </div>    */}
        </div>

        <div>
            <p class='display-3 fw-semibold my-5'   data-aos="fade-up">Proficiencies</p> 
            <div class='col-md-8 col-11 row m-auto'>
                <div class='col-sm-6 col-12' data-aos="fade-up">
                    <img src="frontend.png" alt="react" width="90px" height="90px"/>
                    <p class='fs-5 fw-bold'>Frontend</p> 
                </div>
                {/* <div class='col-sm-6 col-12' data-aos="fade-up">
                    <img src="ds.png" alt="react" width="120px" height="90px"/>
                    <p class='fs-5 fw-bold'>Data Structures & Algorithms</p>
                </div>  */}
            </div>
        </div>
        <br /><br />
    </div>
  )
}

export default Skills