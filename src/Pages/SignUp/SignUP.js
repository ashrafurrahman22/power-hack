import React from 'react';

const SignUP = () => {

    const handleSubmit = event =>{
        console.log(event);
    }

    return (
        <div className='w-150px mx-auto'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <input type="text" />
                <input placeholder='Your Email'  type="email" name="email" id="" />
                <input placeholder='Your Password' type="password" name="password" id="" />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUP;