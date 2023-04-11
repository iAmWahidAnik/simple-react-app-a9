import React, { useEffect, useState } from 'react';
import image from '../../assets/All Images/P3OLGJ1 copy 1.png'
import { useLoaderData } from 'react-router-dom';
import JobCard from './JobCard';
import JobCategories from './JobCategories';



const Home = () => {
    // show data state
    const [showData, setShowData] = useState(false);

    const datas = useLoaderData();
    let newData ;
    
    if(showData){
        newData = datas;
    }else{
        newData = datas.slice(0,4);
    }

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[]);
    
    return (
        <div>
            {/* Home Banner  */}
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-14'>
                {/* text area  */}
                <div className=''>
                    <h1 className='text-7xl text-gray-900 font-bold leading-tight'>One Step <br /> Closer To Your <br /><span className='bg-clip-text text-transparent bg-gradient-to-l from-violet-400 to-indigo-400'>Dream Job</span></h1>
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
                    <h1 className='text-5xl font-bold text-gray-900'>Job Category List</h1>
                    <p className='text-gray-600 my-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 my-5'>
                    {
                        categories.map(category => <JobCategories key={category.id} category={category}></JobCategories>)
                    }
                </div>
            </div>
            {/* Featured Section  */}
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold text-gray-900'>Featured Jobs</h1>
                    <p className='text-gray-600 my-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {
                        
                        newData.map(data => <JobCard key={data.jobId} data={data}></JobCard>)
                    }
                </div>
                <div className='mt-10 text-center'>
                {
                    showData ? <button onClick={() => setShowData(false)} className='py-4 px-6 rounded-lg text-xl font-semibold text-white bg-gradient-to-l from-violet-400 to-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 '>Show Less</button> : 
                    <button onClick={() => setShowData(true)} className='py-4 px-6 rounded-lg text-xl font-semibold text-white bg-gradient-to-l from-violet-400 to-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 '>Show All</button>
                }
                </div>
            </div>
        </div>
    );
};

export default Home;