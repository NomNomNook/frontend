import React from 'react';
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  
  const navigate = useNavigate();
  var logged = false;
  return  (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand " href=""><b>NomNomNook</b></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">

                <Link className='nav-link' to="/">Restaurants</Link>
                
              </li>
              <li class="nav-item">

                <Link className='nav-link' to="/pricing">Pricing</Link>
                
              </li>
              
              
            </ul>
            <form className="d-flex " role="search">
              <input class="form-control me-2 mr-10" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
         
            {logged && <div className='buttons'>
            {/* <Link className="btn btn-outline">true</Link> */}
            <Link className="btn btn-outline">Image</Link>
            </div>}
            {!logged && <div className='buttons'>
            <Link className="btn btn-outline">Register</Link>
            <Link className="btn btn-outline">Login</Link>
            </div>}
            

          </div>
        </div>
      </nav>
    )
}

export  default Navbar;
