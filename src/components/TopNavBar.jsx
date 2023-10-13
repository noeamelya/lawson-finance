import React from 'react';
import { Link } from 'react-router-dom';
import imglogo from "../assets/Logo.png"
import {

  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from 'react-icons/ai';

export default function TopNavBar() {
  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="max-auto container-fluid">
        <div className="flex justify-between">
          <img src={imglogo} alt="logo" className='w-28 object-contain my-10' />
          <div className='justify-between hidden space-x-2 md:flex'>
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
      </div>
    </nav>
  );
}
