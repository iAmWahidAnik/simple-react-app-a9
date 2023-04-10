import React from 'react';
import image from '../../assets/All Images/P3OLGJ1 copy 1.png'
import calculator from '../../assets/Icons/accounts 1.png'
import light from '../../assets/Icons/business 1.png'
import socialMedia from '../../assets/Icons/social-media 1.png'
import chip from '../../assets/Icons/chip 1.png'



const Home = () => {
    return (
        <div>
            {/* Home Banner  */}
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-14'>
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
            {/* category section  */}
            <div className='my-32'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold'>Job Category List</h1>
                    <p className='text-gray-600 my-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-6 my-5'>
                    <div className='p-10 bg-gray-100 rounded'>
                        <div className='p-7 bg-gray-200 inline-block rounded'>
                            <img src={calculator} alt="" />
                        </div>
                        <div className='mt-8'>
                            <h3 className='font-bold text-xl text-gray-700'>Account & Finance</h3>
                            <p className='text-gray-600 mt-2'>300 Jobs Available</p>
                        </div>
                    </div>
                    <div className='p-10 bg-gray-100 rounded'>
                        <div className='p-7 bg-gray-200 inline-block rounded'>
                            <img src={light} alt="" />
                        </div>
                        <div className='mt-8'>
                            <h3 className='font-bold text-xl text-gray-700'>Creative Design</h3>
                            <p className='text-gray-600 mt-2'>100+ Jobs Available</p>
                        </div>
                    </div>
                    <div className='p-10 bg-gray-100 rounded'>
                        <div className='p-7 bg-gray-200 inline-block rounded'>
                            <img src={socialMedia} alt="" />
                        </div>
                        <div className='mt-8'>
                            <h3 className='font-bold text-xl text-gray-700'>Marketing & Sales</h3>
                            <p className='text-gray-600 mt-2'>150 Jobs Available</p>
                        </div>
                    </div>
                    <div className='p-10 bg-gray-100 rounded'>
                        <div className='p-7 bg-gray-200 inline-block rounded'>
                            <img src={chip} alt="" />
                        </div>
                        <div className='mt-8'>
                            <h3 className='font-bold text-xl text-gray-700'>Engineering Job</h3>
                            <p className='text-gray-600 mt-2'>224 Jobs Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;