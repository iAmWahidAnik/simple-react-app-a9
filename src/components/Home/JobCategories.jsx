import React, { useEffect, useState } from 'react';

const JobCategories = ({ category }) => {
    const { id, categoryLogo, categoryName, jobsAvailable } = category;
    return (
        <div className='p-10 bg-gray-100 rounded'>
            <div className='p-7 bg-gray-200 inline-block rounded'>
                <img src={categoryLogo} alt="" />
            </div>
            <div className='mt-8'>
                <h3 className='font-bold text-xl text-gray-700'>{categoryName}</h3>
                <p className='text-gray-600 mt-2'>{jobsAvailable} Jobs Available</p>
            </div>
        </div>
    );
};

export default JobCategories;