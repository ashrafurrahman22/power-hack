import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Total = () => {
  
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
      console.log(data)
      const url = `http://localhost:5000/payment`;
      fetch(url,{
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => console.log(result));
  
      axios.post('http://localhost:5000/payment', data)
      .then(response =>{
        const {data} = response;
        console.log(response);
          if(data.insertedId){
          reset();
          }
      });
    };



    return (
        <div>
            <div class="navbar bg-base-200 mt-5 rounded-xl">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">Billings</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control navbar-start">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
      
      {/* add modal */}
    <div className='navbar-end'>
<label for="my-modal-3" class="btn modal-button">Add New Bill</label>

{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <div className='p-5'>
      <h3 class="text-lg font-bold text-center m-2">Add New Bill</h3>

{/* add form */}
<form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>

<input className='border rounded text-xl' placeholder='Full Name' type='text' {...register("fullName", {required:true})} />

<input className='border rounded text-xl' placeholder='Email' type='email' {...register("email", {required:true})}  />

<input className='border rounded text-xl' placeholder='phone' type='number' {...register("phone", { required: true })} />

<input className='border rounded text-xl' placeholder='Paid Amount' type='number' {...register("paidAmount", { required: true })} />

<input className='rounded-3 btn btn-primary' type="submit" value="add item"/>
</form>
      </div>


  </div>
</div>
    </div>
    <div>
        <p className='text-xl font-semibold mx-5'>Total: </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Total;