import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {


    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    let isSignedIn = props.isSignedIn;
    let setIsSignedIn = props.setIsSignedIn


    return (
        <div className='navbar_at_387px flex justify-between items-center w-11/12 max-w-[1160px] font-poppins py-4 mx-auto'>

            <Link to='/'>
                <img src={logo} alt='logo' width={160} height={32} loading='lazy' />
            </Link>

            <nav className='navbar_at_576_px' >
                <ul className='flex gap-x-4 text-[#adadae]'>

                    <li className=' hover:text-white'>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className=' hover:text-white'>
                        <Link to='/'>About</Link>
                    </li>

                    <li className=' hover:text-white'>
                        <Link to='/'>Contact</Link>
                    </li>

                </ul>
            </nav>

            <div className='flex gap-x-4 text-white items-center  ml-3'>
                {
                    !isLoggedIn &&

                    <Link to='/login'>
                        <button className='bg-[#1c1421]  py-[8px] px-[12px] rounded-[8px] border border-[#352b3b] hover:bg-[#43324f]'>
                            Login
                        </button>
                    </Link>
                }

                {
                    !isLoggedIn &&

                    <Link to='/signup'>
                        <button className='bg-[#1c1421] py-[8px] px-[12px] rounded-[8px] border border-[#352b3b] hover:bg-[#43324f]'>
                            Sign up
                        </button>
                    </Link>
                }

                {
                    (isSignedIn || isLoggedIn) &&

                    <Link to='/'>
                        <button className='bg-[#1c1421] py-[8px] px-[12px] rounded-[8px] border border-[#352b3b] hover:bg-[#43324f]' onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged out!");
                        }}>
                            Log Out
                        </button>
                    </Link>
                }

                {
                    (isSignedIn || isLoggedIn) &&

                    <Link to='/dashboard'>
                        <button className='bg-[#1c1421] py-[8px] px-[12px] rounded-[8px] border border-[#352b3b] hover:bg-[#43324f]'>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar