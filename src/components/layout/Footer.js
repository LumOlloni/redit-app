import React, { Fragment } from "react";
import "../../sass/Navbar.scss";

const Footer = () => {
  return (
    <Fragment>
      <footer
        id='sticky-footer'
        className='page-footer font-small blue fixed-bottom'
      >
        <div className='footer-copyright text-center py-2'>
          <div className='textColor'>
            {" "}
            © 2019 Copyright:
            <a>Lum Olloni</a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
