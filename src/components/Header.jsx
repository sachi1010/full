import React from 'react'
import '../css/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MAYILAI CAB</a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item"> */}
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to="/"><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>  </li></Link>
          <Link to="/About"><li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li></Link>
          <Link to="/Pricing"><li class="nav-item">
          <a class="nav-link" href="#">pricing</a>
        </li></Link>
          <Link to="/Contact"> <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li> </Link>
        {/* </li> */}
        {/* <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
