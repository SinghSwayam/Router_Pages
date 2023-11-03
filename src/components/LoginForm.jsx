import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const LoginForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler() {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Successfully Logged In");
        navigate("/dashboard");
    }

    return (
        <form onSubmit={submitHandler} className='  flex flex-col w-full gap-y-4 mt-2'>
            <label className=''>
                <p className='mb-1 text-lg'>Email Address<sup className=' ml-1 text-red-700'>*</sup></p>
                <input className=' text-slate-300 rounded-[0.5rem] p-[12px] border-b-2 border-[#a3adad] bg-[#3f3f43] w-full ' required type='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Enter Email Address' />
            </label>
            <label className=' relative'>
                <p className='mb-1 text-lg'>Password<sup className=' ml-1 text-red-700'>*</sup></p>
                <input className=' text-slate-300 rounded-[0.5rem] p-[12px] border-b-2 border-[#a3adad] bg-[#3f3f43] w-full ' required type={showPassword ? ('text') : ('password')} name='password' value={formData.password} onChange={changeHandler} placeholder='Enter Password' />
                <span className=' absolute right-3 top-[45px]  ' onClick={() => { setShowPassword((prev) => !prev) }}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : <AiOutlineEye fontSize={24} fill='#aFB2BF' />}
                </span>
            </label>
            <Link className='' to="#">
                <p className='text-xs text-blue-200 max-w-max  ml-auto'>Forgot Password</p>
            </Link>

            <button className=' mt-5 hover:bg-yellow-500 bg-yellow-400 rounded-[10px] font-medium text-black px-[12px] py-[8px]'>
                Sign in
            </button>
        </form>
    )
}

export default LoginForm