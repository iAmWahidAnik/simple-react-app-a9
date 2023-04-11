import React from 'react';
import { Link } from 'react-router-dom';

const AppliedCard = ({ data }) => {
    const { jobId, jobTitle, companyName, logo, jobType, timingType, location, salaryRange } = data;
    return (
        <div className='flex flex-col md:flex-row items-center border w-full border-indigo-400'>
            {/* image section  */}
            <div className='p-6 m-4 h-36 w-44 bg-gray-100 rounded flex items-center justify-center'>
                <img className='w-36 h-auto' src={logo} alt="" />
            </div>
            {/* details section  */}
            <div className='flex flex-col md:flex-row p-8 justify-between items-center w-full'>
                <div className='flex-grow'>
                    <h1 className='text-2xl font-bold text-gray-700'>{jobTitle}</h1>
                    <p className='text-2xl text-gray-500 my-2'>{companyName}</p>
                    <div className='flex gap-4 my-2'>
                        <button className='px-2 py-1 rounded border border-indigo-500 font-semibold text-indigo-500'>{jobType}</button>
                        <button className='px-2 py-1 rounded border border-indigo-500 font-semibold text-indigo-500'>{timingType}</button>
                    </div>
                    <div className='flex gap-3 my-4'>
                        <p className='text-xl text-gray-500 font-semibold'>{location}</p>
                        <p className='text-xl text-gray-500 font-semibold'>{salaryRange}</p>
                    </div>
                </div>
                {/* button section */}
                <div>
                <Link to={`/job-details/${jobId}`}>
                    <button className='py-2 px-3 rounded-lg font-semibold text-white bg-gradient-to-l from-violet-400 to-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>View Details</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedCard;