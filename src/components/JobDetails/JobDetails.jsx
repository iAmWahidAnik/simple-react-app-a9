import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../Utilities/Utils';

const JobDetails = () => {
    const data = useLoaderData();
    const { jobId, companyLogo, jobTitle, companyName, jobType, location, timingType, salaryRange, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation } = data;
    // const { phone, email } = contactInformation;
    const applyJob = id => {
        console.log(id)
        addToDb(id)
    }
    return (
        <div>
            {/* banner area  */}
            <div className='text-center my-28'>
                <h1 className='text-3xl font-bold text-gray-900'>Job Details</h1>
            </div>
            {/* details area  */}
            {/* <div className='flex mx-auto gap-5'> */}
            <div className='grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto gap-5 my-20'>
                {/* text details  */}
                <div className='col-span-2'>
                    <p><b className='text-gray-800'>Job Description : </b><span className='text-gray-600'>{jobDescription} </span></p>
                    <p className='my-6'><b className='text-gray-800'>Job Responsibility : </b><span className='text-gray-600'>{jobResponsibility}</span></p>
                    <p className='mb-6'><b className='text-gray-800'>Educational Requirements: : </b><br /> <br /><span className='text-gray-600'>{educationalRequirements}</span></p>
                    <p><b className='text-gray-800'>Experiences : </b><br /> <br /><span className='text-gray-600'>{experiences}</span></p>
                </div>
                {/* apply box  */}
                <div className=''>
                    <div className='bg-indigo-100 rounded-lg p-7 mb-5'>
                        <div className='pb-6 border-b-2 border-slate-50'>
                            <h3 className='text-xl font-bold'>Job Details</h3> <hr />
                        </div>
                        <div className='pb-6 border-b-2 border-slate-50'>
                            <div className='my-6'>
                                <div className='flex items-end gap-2'>
                                    <p className='text-indigo-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg></p>
                                    <p className='text-gray-600'><b className='text-gray-900'>
                                        Salary : </b>{salaryRange}</p>
                                </div>

                                <div className='flex mt-4 gap-2'>
                                    <p className='text-indigo-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                    </svg></p>
                                    <p className='text-gray-600'><b className='text-gray-900'>Job title : </b>{jobTitle}</p>
                                </div>
                            </div>

                            <h3 className='text-xl font-bold'>Contact Information</h3> <hr />
                        </div>
                        <div className='my-6'>
                            <div className='flex items-center gap-2 text-indigo-500'>
                                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                </p>
                                <p className='text-gray-600'><b className='text-gray-900'>Phone : </b>{contactInformation?.phone}</p>
                            </div>
                            <div className='flex items-center gap-2 text-indigo-500 my-4'>
                                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                </p>
                                <p className='text-gray-600'><b className='text-gray-900'>Email : </b>{contactInformation?.email}</p>
                            </div>
                            <div className='flex items-center gap-2 text-indigo-500'>
                                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                </p>
                                <p className='text-gray-600'><b className='text-gray-900'>Address : </b>{location}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => applyJob(jobId)} className='w-full py-5 bg-indigo-300 rounded-lg text-xl font-semibold text-white bg-gradient-to-l from-violet-400 to-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;