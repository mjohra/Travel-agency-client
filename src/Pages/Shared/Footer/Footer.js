import React from "react";
import "./Footer.css";
import logo from '../../../images/cards.webp';
import logo1 from '../../../images/app-image.png';

const Footer = () => {
  return (
    <div className="footer container-fluid ps-5">
      <div className="row text-left">
        <div className="col-md-3 col-12">
          <h4 className="text-light">Useful Links</h4>
          <p className="text-light">Privacy Policy</p>
          <p className="text-light">Terms of Use</p>
          <p className="text-light">Return Policy</p>
          <p className="text-light">Discount Coupons</p>
          <img src={logo} class="img-fluid mt-2" alt="card"></img>
        </div>
        <div className="col-md-3 col-12">
          <h4 className="text-light">Download App</h4>
          <img src={logo1} class="img-fluid mt-2" alt="card"></img>
        </div>
        <div className="col-md-2 col-12">
          <h4 className="text-light">Follow Us</h4>
          <p className="text-muted">Let us be social</p>
          <div className="column text-light pt-2">
            <i className="fab fa-facebook-f fa-2x pe-2"></i>
            <i className="fab fa-instagram fa-2x pe-2"></i>
            <i className="fab fa-twitter fa-2x pe-2"></i>
            <i className="fab fa-youtube fa-2x"></i>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <h4 className="text-light">Newsletter</h4>
          <p className="text-muted">Stay Updated</p>
          <form className="form-inline">
            <div className="col pl-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-dark text-white"
                  id="inlineFormInputGroupUsername2"
                  placeholder="Email"
                />
                <div className="btn btn-primary pe-5">Submit</div>
              </div>
              <p className="pt-4 text-muted">
                Copyright ©2021 All rights reserved |<br /> This template is
                made with by
                <span> Mehjabin Johra</span>
              </p>
            </div>
          </form>
        </div>
       
        
      </div>
    </div>
  );
};

export default Footer;
