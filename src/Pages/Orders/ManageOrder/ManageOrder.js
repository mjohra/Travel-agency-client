import axios from "axios";
import React, { useEffect, useState } from "react";
import './ManageOrder.css';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    fetch("https://frightening-ghoul-45181.herokuapp.com/allbooking")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [updated]);

  const handleDelete = (id) => {
    const confirmation = window.confirm("Do you want to delete?");
    if (confirmation) {
      const url = `https://frightening-ghoul-45181.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = orders.filter((order) => order?._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  const handleUpdate = (id) => {
      axios.put(`https://frightening-ghoul-45181.herokuapp.com/booking/${id}`, {id})
    .then(function (response) {
      // console.log(response.data);
      if (response.data.modifiedCount) {
        window.alert('Status Updated Successfully!!');
         setUpdated(true);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
      
    
  };
  return (
    <>
      <div id="services" className="container order-top">
        <h1 className="text-center mb-5 main-title">Manage Order</h1>
        <div className="row">
          {orders.map((order) => (
            <div key={order._id} className="col-lg-4 col-md-6 mb-5">
              <div className="card card-details shadow-lg">
                <img
                  src={order?.service.img}
                  className="card-img-top card-img p-3 w-100"
                  alt="..."
                />
                <div className="card-body ">
                  <h1 className="card-title text-center">
                    {order?.service.name}
                  </h1>
                  <p className="card-text">{order?.service.description}</p>
                  <hr />
                  <p className="card-text text-center">
                    Cost: ${order?.service.price}
                  </p>
                  <hr />
                  <p className="card-text text-center">
                    Duration: {order?.service.time}
                  </p>
                  <hr />
                  <p className="card-text text-center">
                    Status: {order?.status}
                  </p>
                  <hr />
                  <div className="btn-grp mt-3">
                  <button className="btn-del px-3 py-2 fw-bold" onClick={() => handleDelete(order._id)}>
                    Delete
                  </button>
                  <button className="btn-up px-3 py-2 fw-bold" onClick={() => handleUpdate(order._id)}>Update Status
                  </button>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageOrder;
