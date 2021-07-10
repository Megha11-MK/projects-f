import React from 'react';
import { Link } from 'react-router-dom';


const TopBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-2">
  <div className="container-fluid">
    <span className="navbar-brand">Navbar</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  ms-auto" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
        <Link to="/signin" className="nav-link">Sign-In</Link>
        </li>
        <li className="nav-item">
        <Link to="/signup" className="nav-link">Sign-Up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
     );
}
 
export default TopBar;