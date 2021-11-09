import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./ServiceDetails.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ServiceDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [info, setInfo] = useState({});
  const { register, handleSubmit, reset } = useForm();
  console.log(user);

  const onSubmit = (data) => {
    const order = { users: data, service: info,status:'pending'};
    axios
      .post("https://frightening-ghoul-45181.herokuapp.com/addOrder", order)
      .then(function (response) {
        if (response.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  useEffect(() => {
    axios
      .get(`https://frightening-ghoul-45181.herokuapp.com/services/${id}`)
      .then(function (response) {
        setInfo(response.data);
      });
  }, [setInfo, id]);

  return (
    <div className="container service-info">
      <div className="row mt-5">
        <div className="col-md-7 col-12">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={info?.img} />
            <Card.Body>
              <Card.Title>{info?.name}</Card.Title>
              <Card.Text>{info?.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cost: {info?.price}</ListGroupItem>
              <ListGroupItem>Duration: {info?.time}</ListGroupItem>
              <ListGroupItem>Status: Pending</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
        <div className="col-md-5 col-12 service">
        <h1 className="p-5 text-center main-title text-black">Add Product</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              defaultValue={user.displayName}
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
            />
            <input
              type="email"
              defaultValue={user.email}
              {...register("email", { required: true })}
              placeholder="Email"
            />
            <input
              className="btn-submit fs-5 border-0 rounded-1 fw-bold"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
