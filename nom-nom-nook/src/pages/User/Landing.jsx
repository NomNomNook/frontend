import Navbar from "../../components/Navbar";
import React from "react";
import "../../App.css";
import img1 from "../../assets/images/11.webp";
import img2 from "../../assets/images/12.webp";
import img3 from "../../assets/images/13.jpg";
import img4 from "../../assets/images/14.webp";
import img5 from "../../assets/images/15.jpg";
import img6 from "../../assets/images/16.jpg";
import img7 from "../../assets/images/17.jpg";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Landing() {
  return (
    <div className="Landing">
      <Navbar />
      <div>
        <div id="carouselExample" className="carousel slide " >
          <div class="carousel-inner " >
            <div class="carousel-item active" >
              <img src={img1}
                class="d-block w-100 " alt="..." />
            </div>
            <div class="carousel-item  ">
              <img src={img2} class="d-block w-100 " alt="..." />
            </div>
            <div class="carousel-item  ">
              <img src={img3} class="d-block w-100 " alt="..." />
            </div>
            <div class="carousel-item  ">
              <img src={img2} class="d-block w-100 " alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          <div className="heading">
            <h1>Best Places</h1>
            <p>We Are Here To Serve You....</p>
            <div className="con">
                
                <div className="item2"> <img src={img6} class="d-block w-100 " alt="..." />

                <p>Most Famous palce in amritsar</p>
                <p>Address: xv Street,Amritsar</p>
                <p>Top Rated Place</p>
                
                
                
                </div>
                <div className="item2"> <img src={img7} class="d-block w-100 " alt="..." />

                <p>Most Famous palce in amritsar</p>
                <p>Address: xv Street,Amritsar</p>
                <p>Top Rated Place</p>
                
                
                
                </div>


              

            </div>
           

          </div>

        </div>

        <footer>@ Code Dragons</footer>
      </div>
    </div>
  );
}

export default Landing;
