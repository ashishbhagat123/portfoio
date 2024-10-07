import React, { useEffect, useState } from "react";
import "./style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = ({theme}) => {

  const [dark,setDark]= useState(false)
  useEffect(() => {
    const nav = document.querySelector(".navbarMain");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("navbarMain--hidden");
      } else {
        nav.classList.remove("navbarMain--hidden");
      }
      lastScrollY = window.scrollY;
    });
  });
  const resume = () => {
    window.open(
      "https://drive.google.com/file/d/146JcrvVNcpo6F8vAtQ3J0gbsK1LAhHlf/view?usp=sharing",
      "_blank"
    );
  };

  useEffect(()=>{
    theme(dark)
  },[dark]) 

  return (
    <div class="navbarMain">
      <div class="d-flex  justify-content-between align-items-center p-2 px-3   ">
        <div>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            <p style={{ color: "#8D6252" }} class="satisfy">
              <span class="display-4 ">A</span>
              <span class="fs-3 fw-semibold">SHISH</span>{" "}
              <span class="display-4" style={{ marginLeft: "5px" }}>
                B
              </span>
              <span class="fs-3 fw-semibold">HAGAT</span>{" "}
            </p>
          </Link>
        </div>
        <div class='lightDark' style={dark?{background:'white'}:{background:'black'}} onClick={()=>setDark(!dark)}>
            <div class='lightDarkInner' style={dark ?{background:'black',left:'30px'}:{background:'white',left:'2px'}} >

            </div>
        </div>
        
        <div class=''>
          <div class="navPc">
            <div class="d-flex gap-4 align-items-center">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={dark ? 
                  {textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                  transition: '2s'}:
                  {
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                  transition: '2s'
                }}
              >
                <p class="fs-5 fw-semibold">Home</p>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={dark ? 
                  {textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                 transition: '2s'}:
                  {
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                   transition: '2s'
                }}
              >
                <p class="fs-5 fw-semibold">About</p>
              </Link>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={dark ? 
                  {textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                  transition: '2s'}:
                  {
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                  transition: '2s'
                }}
              >
                <p class="fs-5 fw-semibold">Education</p>
              </Link>

              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={dark ? 
                  {textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                 transition: '2s'}:
                  {
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                   transition: '2s'
                }}
              >
                <p class="fs-5 fw-semibold">Experience</p>
              </Link>

              {/* <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={dark ? 
                  {textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                 transition: '2s'}:
                  {
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                   transition: '2s'
                }}
              >
                <p class="fs-5 fw-semibold">Skills</p>
              </Link> */}

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={dark ? 
                  {textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                 transition: '2s'}:
                  {
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                   transition: '2s'
                }}
              >
                <p class="fs-5 fw-semibold">Contact</p>
              </Link>

           
              <div type="button" class={dark ?"whiteBtn mx-2":"blackBtn mx-2"}   onClick={resume}>
                <div class={dark ?"whiteText":"blackText"}>View Resume</div>
                <div class={dark?"whiteBg":"blackBg"}>View Resume</div>
              </div>
            </div>
          </div>
          <div class="navMb">
            <p
               
              data-bs-toggle="offcanvas"
              href="#offcanvasNav"
              role="button"
              aria-controls="offcanvasNav"
            >
              <GiHamburgerMenu class="fs-4" style={{color:"#8D6252"}} />
            </p>
            <div
              class="offcanvas offcanvas-end bg-black text-white"
              tabindex="-1"
              id="offcanvasNav"
              aria-labelledby="offcanvasNavLabel"
              style={{ height: "100vh" }}
            >
              <div class="offcanvas-header">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                     transition: '2s'
                  }}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <p style={{ color: "#8D6252" }} class="satisfy">
                    <span class="display-4 ">L</span>
                    <span class="fs-3 fw-semibold">OKESH</span>{" "}
                    <span class="display-4" style={{ marginLeft: "5px" }}>
                      N
                    </span>
                    <span class="fs-3 fw-semibold">IMJE</span>{" "}
                  </p>
                </Link>

                <button
                  type="button"
                  class="btn text-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
              <div class="offcanvas-body">
                <div class="d-grid gap-4">
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                       transition: '2s'
                    }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <p class="fs-5 fw-semibold">Home</p>
                  </Link>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={dark ? 
                      {textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                    transition: '2s'}:
                      {
                      textDecoration: "none",
                      color: "black",
                      cursor: "pointer",
                      transition: '2s'
                    }}
                  >
                    <p class="fs-5 fw-semibold">About</p>
                  </Link>
                  <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                       transition: '2s'
                    }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <p class="fs-5 fw-semibold">Education</p>
                  </Link>

                  <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    duration={500}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                       transition: '2s'
                    }}
                  >
                    <p class="fs-5 fw-semibold">Experience</p>
                  </Link>

                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    duration={500}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                       transition: '2s'
                    }}
                  >
                    <p class="fs-5 fw-semibold">Skills</p>
                  </Link>
{/* 
                  <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    duration={500}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                       transition: '2s'
                    }}
                  >
                    <p class="fs-5 fw-semibold">Project</p>
                  </Link> */}

                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    duration={500}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                       transition: '2s'
                    }}
                  >
                    <p class="fs-5 fw-semibold">Contact</p>
                  </Link>
                  <div type="button" class="whiteBtn m-auto" onClick={resume}>
                    <div class="whiteText">View Resume</div>
                    <div class="whiteBg">View Resume</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
