import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const {
        register,
        handleSubmit,
        reset,
      } = useForm();
      const onSubmit = (data) =>{
        console.log(data);
        axios.post('https://frightening-ghoul-45181.herokuapp.com/addService', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            });
      } 
    return (
        <div className="add-service mt-5">
        <h1 className="p-5 text-center main-title text-white">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
         <input
          {...register("time", { required: true })}
          placeholder="Time Ex:3 days - 3 night"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="Price" />
        
        <input {...register("img")} placeholder="img Url" />
        <input className="btn-design fs-3 border-0 rounded-1 fw-bold" type="submit" />
      </form>
    </div>
    );
};

export default AddService;