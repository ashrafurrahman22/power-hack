import React from 'react';

const SingleBillings = ({consumer}) => {

    const {_id, fullName, email, phone, paidAmount} = consumer;

    return (
      <tr>
        <th>{_id}</th>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{paidAmount}</td>
        <td>
          <button className='btn btn-info mr-5'>Edit</button>
          
          <button className='btn btn-warning'>Delete</button>
        </td>
        
      </tr>
    );
};

export default SingleBillings;