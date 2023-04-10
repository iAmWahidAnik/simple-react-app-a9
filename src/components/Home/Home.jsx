import React from 'react';
import image from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Home = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-14'>
            {/* Home Banner  */}
            {/* text area  */}
            <div className=''>
                <h1 className='text-7xl text-gray-900 font-bold'>One Step <br /> Closer To Your <br /><span className='bg-clip-text text-transparent bg-gradient-to-l from-violet-400 to-indigo-400'>Dream Job</span></h1>
                <p className='text-xl text-gray-700 my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='py-4 px-6 rounded-lg text-xl font-semibold text-white bg-gradient-to-l from-violet-400 to-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>Get Started</button>
            </div>
            {/* image area  */}
            <div className=''>
                <img className='' src={image} alt="image" />
            </div>
        </div>
    );
};

export default Home;