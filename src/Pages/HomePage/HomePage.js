import React from 'react';
import gifhy from '../../assets/blogs.gif'

const HomePage = () => {
    return (
        <div className='min-h-screen'>
        <h2 className="text-2xl text-amber-400 font-semibold my-5 ml-16 uppercase">Coming Soon...</h2>
        <div className='flex justify-center
        items-center'>
            <img src={gifhy} alt="" />
        </div>
    </div>
    );
};

export default HomePage;