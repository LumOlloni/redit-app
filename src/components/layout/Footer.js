import React, { Fragment } from "react";
import "../../sass/Navbar.scss";

const Footer = () => {
  return (
    // <div></div>
    <Fragment>
      <footer className='footer-log page-footer py-2 mt-5'>
        <div className='footer-copyright text-center text-white'>
          © 2019 Copyright : Lum Olloni
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
