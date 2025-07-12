// Header.jsx
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

function Header() {
     const [nav,setNav] = useState(false);
     const handleNav = () =>{
        setNav(!nav)
     }
    return (
      
    
    <nav className="flex justify-between items-center max-w-[1240px] mx-auto px-4 py-2">
      <img className="" src={logo} alt="logo" />
      <ul className="flex max-[800px]:hidden text-[12px] font-bold space-x-2">
        <li>
          <Link className="p-4 rounded-[12px]" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="p-4  rounded-[12px]" to="">
            ABOUT
          </Link>
        </li>
        <li>
          <Link className="p-4  rounded-[12px]" to="">
            MENU
          </Link>
        </li>
        <li>
          <Link className="p-4  rounded-[12px]" to="/reservations">
            RESERVATION
          </Link>
        </li>
        <li>
          <Link className="p-4  rounded-[12px] " to="">
            ORDER ONLINE
          </Link>
        </li>
        <li>
          <Link className="p-4 rounded-[12px] " to="">
            LOGIN
          </Link>
        </li>
        
      </ul>
      <div onClick={handleNav} className="block min-[800px]:hidden ">
        {
            !nav ? <CiMenuFries size={24} className="cursor-pointer"/> : <IoClose size={24} className="cursor-pointer"/>
        }
            
        </div>
        <div  className={nav ? "fixed z-20 left-0 top-0 w-[60%] border-r border-green-600 bg-white h-full ease-in-out duration-300" : "fixed left-[-100%] ease-out duration-500"}>
            <img src={logo} alt="logo" />
      <ul className=" h-[100%] w-[100%] text-left mt-7">
        
        <li className="ml-2 mr-2 border-b">
          <Link to="">
          HOME
          </Link>
        </li>
        <li className="mt-5 ml-2 mr-2 border-b">
          <Link to="">
          ABOUT
          </Link>
        </li>
        <li className="mt-5 ml-2 mr-2 border-b">
          <Link to="">
            MENU
          </Link>
        </li>
        <li className="mt-5 ml-2 mr-2 border-b">
          <Link to="/reservations">
            RESERVATION
          </Link>
        </li>
        <li className="mt-5 ml-2 mr-2 border-b">
          <Link to="">
            ORDER ONLINE
          </Link>
        </li>
        <li className="mt-5 ml-2 ">
          <Link to="">
            LOGIN
          </Link>
        </li>
    </ul>
        </div>
    </nav>
  );
}

export default Header;
