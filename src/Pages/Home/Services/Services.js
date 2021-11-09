import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://frightening-ghoul-45181.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div id="services" className="container mb-5">
      <h1 className="text-center mt-5 mb-5 main-title">Our Services</h1>
      <div className="row">
        {
          loading?(<div className='d-flex justify-content-center'>
          <Spinner animation="border" />
        </div>):(products.map((product) => (
            <div key={product._id} className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="card card-details shadow-lg">
                <img
                  src={product?.img}
                  className="card-img-top card-img p-3 w-100"
                  alt="..."
                />
                <div className="card-body ">
                  <h1 className="card-title text-center">{product?.name}</h1>
                  <p className="card-text">{product?.description}</p>
                  <h3 className="card-text text-center">${product?.price}</h3>
                  <p className="card-text text-center">{product?.time}</p>
                  <Link to={`/servicedetails/${product?._id}`}>
                    <div className="text-center py-2">
                      <button className="text-center btn-design px-3 py-1 mb-2">
                        Book Now
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )))
        }
      </div>
    </div>
  );
};

export default Services;
