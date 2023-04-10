import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-7'>
            <div>
                <Link to='/'><h1 className='text-3xl font-bold text-gray-900'>TalentHub</h1></Link>
            </div>
            <div className='space-x-6 text-gray-600 my-5 md:my-0'>
                <Link to='/statistics'>  
                    <a className='hover:text-violet-500 font-semibold transition-all duration-300' href="">Statistics</a>
                </Link>
                <Link>  
                    <a className='hover:text-violet-500 font-semibold transition-all duration-300' href="">Applied Jobs</a>
                </Link>
                <Link>  
                    <a className='hover:text-violet-500 font-semibold transition-all duration-300' href="">Blog</a>
                </Link>
            </div>
            <div>
                <Link><button className='py-4 px-6 rounded-lg text-xl font-semibold text-white bg-gradient-to-l from-violet-400 to-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>Start Applying</button></Link>
            </div>
        </div>
    );
};

export default Header;