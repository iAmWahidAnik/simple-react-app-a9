import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-center my-28 '>
                <h1 className='text-3xl font-bold text-gray-900'>Blog</h1>
            </div>
            <div className='flex flex-col my-12 max-w-4xl mx-auto text-center gap-6'>
                <div className='border-y-2 border-gray-100'>
                    <h1 className='my-5 text-3xl text-indigo-500 font-semibold'>When should you use context API?</h1>
                    <p className='mb-5 text-xl text-gray-500'>we have to use context API, when we need to access data in many different nested components.
                    </p>
                </div>

                <div className='border-y-2 border-gray-100'>
                    <h1 className='my-5 text-3xl text-indigo-500 font-semibold'>What is a custom hook?</h1>
                    <p className='mb-5 text-xl text-gray-500'>custom hook is a special JavaScript function. It's naming convention starts with 'use'. custom hooks can call other react hooks.
                    </p>
                </div>

                <div className='border-y-2 border-gray-100'>
                    <h1 className='my-5 text-3xl text-indigo-500 font-semibold'>What is useRef?</h1>
                    <p className='mb-5 text-xl text-gray-500'>useRef is a react hook. useRef accepts one argument as the initial value and it returns a reference.
                    </p>
                </div>

                <div className='border-y-2 border-gray-100'>
                    <h1 className='my-5 text-3xl text-indigo-500 font-semibold'>What is useMemo?</h1>
                    <p className='mb-5 text-xl text-gray-500'>useMemo is a react hook. useMemo returns a memoized value. <br /> useMemo hook only runs when its dependencies update.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;