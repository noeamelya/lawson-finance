import React from 'react';
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-slate-800 px-2 pb-2 pt-5 text-white lg:px-48 ">
      <div className="grid-col-1 container mx-auto mb-8 grid md:grid-cols-4">
        <div className="mb-4 px-2 md:mb-4">
          <h2 className="justify-left font-brand p-2 text-2xl font-black text-white">
            <span className="text-orange-400">Lawson Financial Consultancy Ltd.</span>
          </h2>
          <p className="p-2 text-[15px]">
          Our experienced Independent Financial Advisers will engage with you and your family, to fully understand your aspirations and life goals.
          </p>
        </div>
        <div className="mb-4 px-2 md:mb-4 md:ml-10">
          <h3 className="p-2 text-[16px] font-semibold uppercase text-slate-400">
            Our Services
          </h3>
          <p className="p-2 hover:text-orange-400">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Financial adviser
            </a>
          </p>
          <p className="p-2 hover:text-orange-400">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Mortgage broker 
            </a>
          </p>
          <p className="p-2 hover:text-orange-400">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Insurance broker
            </a>
          </p>
          <p className="p-2 hover:text-orange-400">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Pension & Retirement
            </a>
          </p>
        </div>
        <div className="mb-4 px-2 md:mb-4">
          <h3 className="p-2 text-[16px] font-semibold uppercase text-slate-400">
            Contact Us
          </h3>
          <p className="p-2 text-[15px]">Email: </p>
          <a
            href="david@lawsonfinancialconsultancy.com"
            className="p-2 text-slate-400"
          >
            david@lawsonfinancialconsultancy.com
          </a>
          <p className="p-2 text-[15px]">Phone: </p>
          <a href="/" className="p-2 text-slate-400">
            +447831 504125
          </a>
        </div>
        <div className="hidden space-x-2 md:flex">
        
          <a href="/" className="text-slate-500">
            <AiFillLinkedin className="text-[30px]" />
          </a>
          <a href="/" className="text-slate-500">
            <AiFillTwitterSquare className="text-[30px]" />
          </a>
          <a href="/" className="text-slate-500">
            <AiFillInstagram className="text-[30px]" />
          </a>
        </div>
      </div>
      <hr className="w-100 clearfix d-md-none" />
      <div className="justify-center p-3 text-center text-[10px]">
        &copy; 2023{' '}
        <a
          className="text-white"
          href="#"
        >
          Lawson Financial Consultancy Ltd,
        </a>
      </div>
    </footer>
  );
}
