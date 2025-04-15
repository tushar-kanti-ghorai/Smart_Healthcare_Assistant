import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="md:mx-10">
      
      {/* Section Heading */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      {/* Contact Information Section */}
      <div className="my-10 flex flex-col md:flex-row gap-12 mb-28 text-sm">
        <img 
          className="w-full md:max-w-[360px]" 
          src={assets.contact_image} 
          alt="Contact Smart Healthcare Assistant" 
        />
        
        <div className="flex flex-col justify-center items-start gap-6">
          
          {/* Office Address */}
          <div>
            <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
            <p className="text-gray-500">
              📍 Near KIIT University, Bhubaneswar, India
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <p className="font-semibold text-lg text-gray-600">CONTACT DETAILS</p>
            <p className="text-gray-500">
              📞 +91 98765 43210 <br />
              📧 support@smarthealth.com
            </p>
          </div>


        </div>
      </div>

    </div>
  );
};

export default Contact;
