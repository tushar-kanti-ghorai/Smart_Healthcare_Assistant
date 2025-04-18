import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="px-6 md:px-12">

      {/* Heading */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="About Smart Healthcare Assistant" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to <b>Smart Healthcare Assistant</b>, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments, tracking symptoms, and maintaining health records.
          </p>
          <p>
            At <b>Smart Healthcare Assistant</b>, we are committed to transforming healthcare through intelligent solutions. Our platform combines modern web technologies with AI-powered tools—including a smart medical chatbot (AI-Doctor) and image analysis—to provide quick, reliable health insights and streamline patient care.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making access to care faster, more accurate, and more personalized through innovation and technology.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl my-4">
        <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>Seamless appointment scheduling, real-time health support, and integrated tools—all in one platform.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>INNOVATION:</b>
          <p>AI-powered chatbot and image analysis for quick symptom understanding and medical insights.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>Tailored recommendations, alerts, and reminders to help you stay on top of your health journey.</p>
        </div>
      </div>

    </div>
  );
};

export default About;
