import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const Twelfth = () => {
  const navigate = useNavigate();
  return (
    <div class="col-12 row mt-5 m-0 my-4">
      <div class="col-md-7 col-12 text-start  d-flex  align-items-center ">
        <div class="col-sm-10 m-auto " data-aos="fade-up">
        <p class="fs-1 ">Senior Secondary School </p><br />
          <p class="fs-4 ">
            <span class='fw-bold'>Govinda Dasa PU College</span><br /> <span>(2012)</span>
          </p> 
           
         
        </div>
      </div>
      {/* <div class="col-md-5 col-12 row justify-content-between m-0 p-0 gap-sm-0 gap-5 ">
        <div class="  col-12" data-aos="zoom-in">
          <img
            src={require("./projectImg/ssm.jpg")}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "50px",
            }}
            alt=""
          />
        </div>
      </div> */}
     
    </div>
  );
};

const Degree = () => {
  const navigate = useNavigate();
  return (
    <div class="col-12 row mt-5 m-0 my-4">
      <div class="col-md-7 col-12 text-start  d-flex  align-items-center ">
        <div class="col-sm-10 m-auto " data-aos="fade-up">
        <p class="fs-1 ">Bachelor Of Engineering </p><br />
          <p class="fs-4 ">
            <span class='fw-bold'>Shree Devi Institute of Technology</span><br /> <span>(July 2013 - June 2017)</span>
          </p>  
        </div>
      </div>
      {/* <div class="col-md-5 col-12 row justify-content-between m-0 p-0 gap-sm-0 gap-5 ">
        <div class="  col-12" data-aos="zoom-in">
          <img
            src={require("./projectImg/sistec.png")}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "50px",
            }}
            alt=""
          />
        </div>
      </div> */}
      
    </div>
  );
};

const Training  = () => {
  const navigate = useNavigate();
  return (
    <div class="col-12 row m-0 my-4">
      <div class="col-md-7 col-12 text-start d-flex  align-items-center ">
        <div class="col-sm-10 m-auto " data-aos="fade-up">
        <p class="fs-1 ">Full-Stack Web Development</p><br />
          <p class="fs-4 ">
            <span class='fw-bold'>Masai School, Bangalore</span><br /> <span>(Oct 2020 - June 2021)</span>
          </p>
        </div>
      </div> 
      {/* <div class="col-md-5 col-12 row justify-content-between m-0 p-0 gap-sm-0 gap-5 ">
        <div class="  col-12" data-aos="zoom-in">
          <img
            src={require("./projectImg/masai.png")}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "50px",
            }}
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
};


const Education = ({theme}) => {

    const [rotationAngle, setRotationAngle] = useState(0);
    const [filterProduct, setFilterProduct] = useState("Training");
  
    useEffect(() => {
      const texts = document.querySelectorAll(".text p span");
  
      texts.forEach((span, i) => {
        span.style.transform = `rotate(${rotationAngle + i * 50}deg)`;
      });
    }, [rotationAngle]);
  
    const handleTextClick = (e) => {
      setRotationAngle((prevAngle) => prevAngle + 50); // Change the angle as per your requirement
      setFilterProduct(e);
    };
  
    useEffect(() => {
      AOS.init({ duration: 1500 });
    });
  return (
    <div class='education' style={{overflow:'hidden'}}>
        <p class='display-3 fw-semibold mt-5'  data-aos="fade-up">Education</p>


        <div class="col-12 row align-items-center m-0" >
        <div class="col-lg-11 col-md-10 col-9  p-0">
        {filterProduct == "12th" ? <Twelfth /> : ""}
        {filterProduct == "Degree" ? <Degree /> : ""}
        {filterProduct == "Training" ? <Training  /> : ""}
        </div>

        <div class="col-lg-1 col-md-2 col-3">
        <div className="circle" data-aos="zoom-in">
            <div className="logo" style={{border:'3px solid'}}></div>
            <div className="text">
            <p style={theme?{color:"gray"}:{color:'black'}}>
                <span onClick={() => handleTextClick("Training")}>Training </span>
                <span onClick={() => handleTextClick("12th")}>12th</span>
                <span onClick={() => handleTextClick("Degree")}>Degree</span>
                <span onClick={() => handleTextClick("Training")}>Training </span>
                <span onClick={() => handleTextClick("12th")}>12th</span>
                <span onClick={() => handleTextClick("Training")}>Training </span>
                <span onClick={() => handleTextClick("Degree")}>Degree</span>
                
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Education