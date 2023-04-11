import React from 'react';

const Footer = () => {
    return (
        <div className='mt-16 py-16 bg-gray-900 text-white px-6 rounded-lg'>
            <div className='grid grid-cols-1 md:grid-cols-6 gap-5 '>
                <div className='md:col-span-2'>
                    <h1 className='text-3xl font-bold mb-5'>TalentHub</h1>
                    <p className='text-gray-400'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='mt-5'>
                        <img src='https://i.ibb.co/M9cM4WD/Group-9969.png' alt="" />
                    </div>
                </div>
                <div>
                    <p className='mb-5 text-xl'>Company</p>
                    <p className='text-gray-400 mb-3'>About Us</p>
                    <p className='text-gray-400 mb-3'>Work</p>
                    <p className='text-gray-400 mb-3'>Latest News</p>
                    <p className='text-gray-400 mb-3'>Careers</p>
                </div>
                <div>
                    <p className='mb-5 text-xl'>Product</p>
                    <p className='text-gray-400 mb-3'>Prototype</p>
                    <p className='text-gray-400 mb-3'>Plans & Pricing</p>
                    <p className='text-gray-400 mb-3'>Customers</p>
                    <p className='text-gray-400 mb-3'>Integrations</p>
                </div>
                <div>
                    <p className='mb-5 text-xl'>Support</p>
                    <p className='text-gray-400 mb-3'>Help desk</p>
                    <p className='text-gray-400 mb-3'>Sales</p>
                    <p className='text-gray-400 mb-3'>Become a Partner</p>
                    <p className='text-gray-400 mb-3'>Developers</p>
                </div>
                <div>
                    <p className='mb-5 text-xl'>Contact</p>
                    <p className='text-gray-400 mb-3'>524 Broadway , NYC</p>
                    <p className='text-gray-400 mb-3'>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <hr className='my-10' />
            <div className='flex flex-col md:flex-row justify-between'>
                <p><small>@2023 <b>TalentHub.</b> All Rights Reserved</small></p>
                <p><small>Powered by <b>TalentHub</b></small></p>
            </div>
        </div>
    );
};

export default Footer;