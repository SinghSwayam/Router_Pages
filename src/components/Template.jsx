import React from 'react'
import frameImg from '../assets/frame.png'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc'


const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className=' flex flex-row w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12  '>

            <div className=' max-w-[450px] w-11/12 mx-auto '>
                <h1 className=' heading_at_904_px text-[#ececf1] font-semibold text-[1.7rem] leading-[2.375rem]'>{title}</h1>

                <p className='heading_at_904_px text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='  text-[#c0baba]'>{desc1}</span><br />
                    <span className=' heading_at_904_px text-blue-300 italic'>{desc2}</span>
                </p>

                {formtype === 'signup' ? (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                <div className='flex flex-row w-full  items-center my-4 gap-x-2'>
                    <div className='h-[2px] w-full bg-[#585757]'></div>
                    <p className=' text-[#868484] font-medium leading-[1.375rem]'>OR</p>
                    <div className='h-[2px] w-full bg-[#585757]'></div>
                </div>

                <button className=' text-[#dededf] flex items-center gap-x-2 w-full justify-center rounded-[8px] font-medium border border-[#454447] mx-auto px-[12px] py-[8px] hover:bg-[#a2a0a022] transition-all duration-200 '>
                    <FcGoogle />
                    <p>Sign In with Google</p>
                </button>

            </div>

            <div className=' display_904_px relative'>
                <img src={frameImg} width={558} height={504} loading='lazy' className=' z-10 rounded-lg ' />
                <img src={image} width={558} height={504} loading='lazy' className=' z-20  absolute -top-4 right-4 rounded-lg' />
            </div>

        </div>
    )
}

export default Template