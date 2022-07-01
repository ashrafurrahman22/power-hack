import React from 'react';

const SignUP = () => {

    const handleSubmit = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    return (
        <div className=' p-20 gap-3 flex items-center justify-center'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
            <input type="email" placeholder="Your Email" name='email' class="input input-bordered w-full max-w-xs" />
            <input type="password" placeholder="Your password" name='password' class="input input-bordered w-full my-3" />
                <input className='btn my-3' type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUP;