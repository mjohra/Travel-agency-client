import React from "react";
import pic1 from "../../../images/g1.jpg";
import pic2 from "../../../images/g2.jpg";
import pic3 from "../../../images/g3.jpg";
import pic4 from "../../../images/g4.jpg";
import pic5 from "../../../images/g5.jpg";
import pic6 from "../../../images/g6.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div id="gallery" className="container">
      <h1 className="p-5 text-center main-title mt-5">Gallery</h1>
      <div className="row">
        <div className="picture col-md-6 col-12">
          <img src={pic1} alt="" />
          <img src={pic2} alt="" />
          <img src={pic6} alt="" />
        </div>
        <div className="picture col-md-6 col-12">
          <img src={pic4} alt="" />
          <img src={pic5} alt="" />
          <img src={pic3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
