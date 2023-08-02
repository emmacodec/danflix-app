import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/Authcontext';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const {user, SignUp} = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SignUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    };
  }

  return (
    <>
    <div className='w-full h-screen '>
      <img 
      className='hidden sm:block absolute w-full h-full object-cover' 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/5eab1b22-c5ea-48b0-8ef4-862b3fa6df2c/e630dd10-1a25-4ce7-84fc-81fa5897e400/NG-en-20230724-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
      alt='/' />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
      <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-bold'>Sign Up</h1>
          <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
            <input
            onChange={(e) => setEmail(e.target.value)}
             className='p-3 my-2 bg-gray-700 rounded' 
            type='email' 
            placeholder='E-mail' 
            autoComplete='email' />
            <input 
              onChange={(e) => setPassword(e.target.value)}
              className='p-3 my-2 bg-gray-700 rounded'
            type='password' 
            placeholder='Password' 
            autoComplete='current password' />

            <button className='bg-orange-600 py-3 my-6 rounded font-bold'>Sign Up</button>

            <div className='flex justify-between items-center text-sm text-gray-600'>
              <p><input type='checkbox' className='mr-2' />Look at Me..!!</p>
              <p>Customer Service</p>
            </div>
            <p className='py-8'>
              <span className='text-gray-600'>
                Already Subscribe to DANFLIX?
                </span>{' '}
                <Link to='/login'>Sign In</Link>
                </p>
          </form>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
