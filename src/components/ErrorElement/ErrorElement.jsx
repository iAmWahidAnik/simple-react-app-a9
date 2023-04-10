import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='w-9/12 m-auto py-16 min-h-screen flex items-center justify-center'>
            <div className='text-center'>
                <h1 class="text-9xl font-bold text-purple-400">404</h1>
                <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
                <p class="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                <div className='flex gap-5 justify-center'>
                    <Link to='/'>
                        <button class="py-4 px-6 rounded-lg text-xl font-semibold text-white bg-gradient-to-l from-violet-400 to-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            HOME
                        </button>
                    </Link>
                    <Link>
                        <button class="py-4 px-6 rounded-lg text-xl font-semibold text-white bg-gradient-to-l from-violet-400 to-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;