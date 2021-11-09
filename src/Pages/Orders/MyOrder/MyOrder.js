import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import './MyOrder.css';

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://frightening-ghoul-45181.herokuapp.com/booking/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

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
            const remaining = myOrders.filter((order) => order?._id !== id);
            setMyOrders(remaining);
          }
        });
    }
  };
  return (
    <div id="services" className="container text-center ">
    <h1 className="text-center mb-5 order-top main-title">Order for {user.displayName}</h1>
    <div className="row">
      {myOrders.map((order) => (
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
              <hr />
              <h3 className="card-text text-center">Cost:
                ${order?.service.price}
              </h3>
              <hr />
              <h3 className="card-text text-center">Duration:
                {order?.service.time}
              </h3>
              <hr />
              <h3 className="card-text text-center">Status:
                {order?.status}
              </h3>
              <hr />

              <button className="btn-delete px-5 py-2 fw-bold text-center" onClick={() => handleDelete(order._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default MyOrder;
