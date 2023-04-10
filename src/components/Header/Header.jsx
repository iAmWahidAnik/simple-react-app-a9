import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-7'>
            <div>
                <h1 className='text-3xl font-bold text-gray-900'>TalentHub</h1>
            </div>
            <div className='space-x-6 text-gray-600'>
                <Link>  
                    <a href="">Statistics</a>
                </Link>
                <Link>  
                    <a href="">Applied Jobs</a>
                </Link>
                <Link>  
                    <a href="">Blog</a>
                </Link>
            </div>
            <div>
                <button className='py-4 px-6 rounded-lg text-xl font-semibold text-white bg-gradient-to-l from-violet-400 to-indigo-400'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;