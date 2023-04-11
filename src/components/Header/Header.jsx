import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-7'>
            <div>
                <Link to='/'><h1 className='text-3xl font-bold text-gray-900'>TalentHub</h1></Link>
            </div>
            <div className='space-x-6 text-gray-600 my-5 md:my-0'>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>  
                    <a className='hover:text-violet-500 font-semibold transition-all duration-300' href="">Home</a>
                </NavLink>
                <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : '')}>  
                    <a className='hover:text-violet-500 font-semibold transition-all duration-300' href="">Statistics</a>
                </NavLink>
                <NavLink to='/applied-job' className={({ isActive }) => (isActive ? 'active' : '')}>  
                    <a className='hover:text-violet-500 font-semibold transition-all duration-300' href="">Applied Jobs</a>
                </NavLink>
                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : '')}>  
                    <a className='hover:text-violet-500 font-semibold transition-all duration-300' href="">Blog</a>
                </NavLink>
            </div>
            <div>
                <Link><button className='py-4 px-6 rounded-lg text-xl font-semibold text-white bg-gradient-to-l from-violet-400 to-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>Start Applying</button></Link>
            </div>
        </div>
    );
};

export default Header;