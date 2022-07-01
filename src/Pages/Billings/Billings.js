import React, { useEffect, useState } from 'react';
import SingleBillings from './SingleBillings';
import Total from './Total';

const Billings = () => {

    const [consumers, setConsumer] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/payment')
        .then(res => res.json())
        .then(data => setConsumer(data))
    }, [consumers])

    return (
        <div>
          <Total></Total>
                    <div>
            <div className='mb-10 mt-3'>
            <div class="overflow-x-auto">
            <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
      <tr>
        <th>Billing Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Paid Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
            {
                consumers.map(consumer => <SingleBillings
                key={consumer._id}
                consumer ={consumer}
                ></SingleBillings> )
            }
            
    </tbody>
  </table>
</div>
        </div>
        </div>
        </div>
    );
};

export default Billings;