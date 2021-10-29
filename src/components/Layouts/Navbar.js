import { Button } from 'bootstrap';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="./images/mars.jpg" alt="logo" width="80" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="d-flex" className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="#">STORIES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="#">CONTACT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="#">LOG IN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn-danger text-white" href="#">SIGN UP</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<AppBartwo />
    </>
  )
}

export default Navbar;

function AppBartwo() {
  

  return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <div className="d-flex" className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active"  href="#">MARKETPLACE</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active" href="#">WHOLESALE CENTER</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active" href="#">SELLER CENTER</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active" href="#">SERVICES</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active" href="#">INTERNSHIP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">EVENTS</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
}