import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({data}) => {
    const {jobId, logo, jobTitle, companyName, jobType, timingType, location, salaryRange} = data;
    return (
        <div className='border rounded p-10'>
            <img src={logo} alt="" />
            <h3 className='text-2xl font-bold text-gray-600 mt-7'>{jobTitle}</h3>
            <p className='text-xl text-gray-500 my-2 font-semibold'>{companyName}</p>
            <div className='space-x-3 my-4'>
                <button className='px-2 py-1 rounded border border-indigo-500 font-semibold text-indigo-500'>{jobType}</button>
                <button className='px-2 py-1 rounded border border-indigo-500 font-semibold text-indigo-500'>{timingType}</button>
            </div>
            <div className='flex gap-3 mb-4'>
                <p className='text-xl text-gray-500 font-semibold'>{location}</p>
                <p className='text-xl text-gray-500 font-semibold'>{salaryRange}</p>
            </div>
            <Link to={`/job-details/${jobId}`}>
            <button className='py-2 px-3 rounded-lg font-semibold text-white bg-gradient-to-l from-violet-400 to-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>View Details</button>
            </Link>
        </div>
    );
};

export default JobCard;