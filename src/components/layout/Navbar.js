import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar navbar-expand-lg bg-light navbar-light mb-3'>
      <button
        type='button'
        className='navbar-toggler'
        data-toggle='collapse'
        data-target='#navbarCollapse'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='navbar-brand '>
        <i style={style} className={icon}></i>
        {title}
      </div>
      <div className='collapse navbar-collapse' id='navbarCollapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link mt-2' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link mt-2' to='/search'>
              Search Reddit
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link mt-2' to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const style = {
  color: "#FF4301"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
