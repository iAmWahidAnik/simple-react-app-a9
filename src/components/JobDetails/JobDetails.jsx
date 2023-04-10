import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData();
    const { companyLogo, jobTitle, companyName, jobType, location, timingType, salaryRange, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation } = data;
    const { phone, email } = contactInformation;
    return (
        <div>
            {/* banner area  */}
            <div className='text-center my-28'>
                <h1 className='text-3xl font-bold text-gray-900'>Job Details</h1>
            </div>
            {/* details area  */}
            {/* <div className='flex mx-auto gap-5'> */}
            <div className='grid grid-cols-3 w-4/5 mx-auto gap-5 my-20'>
                {/* text details  */}
                <div className='border col-span-2'>
                    <p><b className='text-gray-800'>Job Description : </b><span className='text-gray-600'>{jobDescription} designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</span></p>
                    <p className='my-6'><b className='text-gray-800'>Job Responsibility : </b><span className='text-gray-600'>{jobResponsibility}UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</span></p>
                    <p className='mb-6'><b className='text-gray-800'>Educational Requirements: : </b><br /> <br /><span className='text-gray-600'>{educationalRequirements}</span></p>
                    <p><b className='text-gray-800'>Experiences : </b><br /> <br /><span className='text-gray-600'>{experiences}</span></p>
                </div>
                {/* apply box  */}
                <div className=''>
                    <div>
                    <h3 className='text-xl font-bold'>Job Details</h3> <hr />
                    </div>
                    <div>
                        <p><b>Salary : </b></p>
                        <p><b>Job title : </b></p>

                        <h3 className='text-xl font-bold'>Contact Information</h3> <hr />
                    </div>
                    <div>
                        <p><b>Phone : </b></p>
                        <p><b>Email : </b></p>
                        <p><b>Address : </b></p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;