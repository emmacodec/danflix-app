import React from 'react'
import wow from '../assets/wow.mp4'
import Savedshows from '../components/Savedshows';

const Accounts = () => {
  return (
    <>
    <div className='w-full text-white '>
    <video className='w-full h-[400px] object-cover' src={wow} autoPlay loop muted />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Saved Shows</h1>
    </div>
    </div>
      <Savedshows />
    </>
  );
};

export default Accounts;
