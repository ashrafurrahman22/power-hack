import React, { useEffect, useState } from 'react';
import SingleBillings from './SingleBillings';
import Total from './Total';

const Billings = () => {
    const [consumers, setConsumer] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);


    useEffect(()=>{
      fetch(`https://royal-doright-26309.herokuapp.com/payment?page=${page}&size=${size}`)
      .then(res => res.json())
      .then(data => setConsumer(data))
  }, [consumers, size])


    useEffect(()=>{
      fetch('https://royal-doright-26309.herokuapp.com/paymentcount')
      .then(res => res.json())
      .then(data =>{
        const count = data.count;
        const pages = Math.ceil(count/10);
        setPageCount(pages)
      })
    }, [])

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
            {/* pagination */}
            <div className='pagination flex justify-center items-center gap-3 my-4'>
                  {
                    [...Array(pageCount).keys()]
                    .map(number => 
                    <button
                    className={page === number ? 'btn btn-primary' : 'btn'}
                    onClick={()=> setPage(number)}
                    class="btn">{number+1}</button>
                    
                     )
                  } 
                  <select onClick={e => setSize(e.target.value) }>
                        {/* <option value="5">5</option> */}
                        <option value="10">10</option>
                    </select>       
            </div>
        </div>
    );
};

export default Billings;