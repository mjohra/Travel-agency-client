import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner-1.jpg";
import banner2 from "../../../images/banner-2.jpg";
import banner3 from "../../../images/banner-3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5 col-12 text-center banner">

              <div className="mt-5 title-first"><h1>Let's Travel</h1></div>

              <h1 className="mt-5">If you think adventure is dangerous, try routine, it’s lethal.Great things never came from comfort zones</h1>
              <p></p>

          </div>
          <div className="col-md-7 col-12">
            <Carousel id="home">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;