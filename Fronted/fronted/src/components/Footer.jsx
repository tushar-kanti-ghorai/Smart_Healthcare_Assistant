import React from 'react';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Company Information */}
        <div>
          <p className='text-2xl font-bold text-primary mb-5'>
            Smart Healthcare Assistant
          </p>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
           Our platform helps patients connect with doctors, check symptoms, and manage appointments seamlessly.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-primary cursor-pointer'>Home</li>
            <li className='hover:text-primary cursor-pointer'>About Us</li>
            <li className='hover:text-primary cursor-pointer'>Contact Us</li>
            <li className='hover:text-primary cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>📞 +91 98765 43210</li>
            <li>📧 support@smarthealth.com</li>
            <li>📍 KIIT, Bhubaneswar, India</li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center text-gray-600'>
          © 2025 Smart Healthcare Assistant - All Rights Reserved.
        </p>
      </div>

    </div>
  );
};

export default Footer;
