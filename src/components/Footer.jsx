import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <section className='grid md:grid-cols-3  grid-cols-1 mt-12 gap-20 border-t '>
        <div className='flex mt-12'><img src={logo} alt="" /></div>
        <div className="text-start md:text-center">
        <ul className="md:mt-12 m-auto">
            <li>
            <Link className="p-4 " to="">
                HOME
            </Link>
            </li>
            <li>
            <Link className="p-4 " to="">
                ABOUT
            </Link>
            </li>
            <li>
            <Link className="p-4 " to="">
                MENU
            </Link>
            </li>
            <li>
            <Link className="p-4 " to="/reservations">
                RESERVATION
            </Link>
            </li>
            <li>
            <Link className="p-4  " to="">
                ORDER ONLINE
            </Link>
            </li>
            <li>
            <Link className="p-4 " to="">
                LOGIN
            </Link>
            </li>
            
        </ul>
        </div>
        <div className='flex justify-start md:justify-center gap-12 md:items-center'>
        <CiInstagram />
        <FaXTwitter />
        <FaFacebook />
        
       </div>
       
    </section>
    <section><p className='mt-12'>All Rights Reserved 2025.</p></section>
    </>
  )
}

export default Footer