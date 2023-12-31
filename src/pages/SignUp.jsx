import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/Authcontext';
import {FaLinkedin, FaGithub, FaWhatsapp} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import watch from '../assets/watch.mp4'


const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth();
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    };
  }

  return (
    <>
    <div className='w-full h-screen '>
      <video className='hidden sm:block absolute w-full h-full object-cover' src={watch} autoPlay loop muted />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
      <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-bold'>Sign Up</h1>
          <form 
          onSubmit={handleSubmit} 
          className='w-full flex flex-col py-4'>
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
                <h3 className='flex text-gray-600 text-xl font-bold items-center justify-center'>Follow Me</h3>
                <div className='flex justify-between my-6'>
                  <a href='https://www.github.com/emmacodec'><FaGithub className='bg-black-500 cursor-pointer ' size={20} /></a>
                  <a href='https://www.linkedin.com/in/daniel-emmanuel-924564236'><FaLinkedin className='bg-blue-500 cursor-pointer' size={20} /></a>
                  <a href='https://wa.me/2348164060988'><FaWhatsapp className='bg-green-500 cursor-pointer' size={20} /></a>
                  <a href='https://danielemmanuel7553@gmail.com'><HiOutlineMail className='bg-purple-500 cursor-pointer' size={20} /></a>
                  
              </div>
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
