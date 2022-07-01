import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useConsumer from '../../hooks/useConsumer';

const SingleBillings = ({consumer}) => {

    const {_id, fullName, email, phone, paidAmount} = consumer;

    const [consumers, setConsumer] = useConsumer();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
      console.log(data)
      const url = `http://localhost:5000/payment/${_id}`
        fetch(url, {
          method : 'PUT',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          console.log('success', data);
          reset();
          toast('Updated Successfully');
        });
    };





    const handleDelete = id =>{
      const procede = window.confirm('Are You Sure?');
      if(procede){
        const url = `http://localhost:5000/payment/${id}`
        fetch(url, {
          method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          toast.success('Deleted Successfully');
          const remaining = consumer.filter(con => con._id !== id);
          setConsumer(remaining);
          console.log(remaining);
        })
      };
    }

    return (
      <tr>
        <th>{_id}</th>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{paidAmount}</td>
        <td>

          {/* add modal */}
        
        <label for="my-modal-1" class="btn modal-button">edit</label>
<input type="checkbox" id="my-modal-1" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-1" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Edit</h3>

      {/* form */}
      <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <input className='border rounded text-xl m-2' placeholder='Name' type='text' {...register("name", { required: true })} />
      <input className='border rounded text-xl m-2' placeholder='Email' type='email' {...register("email", { required: true })} />
      <input className='border rounded text-xl m-2' placeholder='Phone' type='number' {...register("phone", { required: true })} />
      <input className='border rounded text-xl m-2' placeholder='Paid Amount' type='number' {...register("paidAmount", { required: true })} />
      <input className='btn btn-primary' type="submit" />
    </form>


  </div>
</div>   

          <button onClick={()=>handleDelete(consumer._id)}  className='btn btn-warning'>Delete</button>
        </td>
      </tr>
    );
};

export default SingleBillings;