import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ setIsLoggedIn }) => {


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType, setAccountType] = useState("student");

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',

    })


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
        if (formData.password != formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }

        setIsLoggedIn = false;
        toast.success("Account Created Successfully");

        const finalData = {
            ...formData,
            accountType
        }
        console.log(finalData);

        navigate("/dashboard");
    }

    return (
        <div className='w-full'>
            {/* student - instructor tab */}

            <div className='signup_button_on_425px button_at_904_px flex bg-[#1f1f257e] p-2 my-6 w-[60%] rounded-full justify-around gap-x-1 text-[#7c7878]'>

                <button
                    className={`${accountType === "student" ? " bg-[#100f0f] text-white" : "bg-transparent text-[#7c7878]"} py-2 px-5 rounded-full transition-all duration-500`}
                    onClick={() => setAccountType("student")}  >
                    Student
                </button>
                <button
                    className={`${accountType === "instructor" ? " bg-[#100f0f] text-white" : "bg-transparent text-[#7c7878]"} py-2 px-5 rounded-full transition-all duration-00`}
                    onClick={() => setAccountType("instructor")} >
                    Instructor
                </button>

            </div>

            <form className='flex text-white flex-col w-full gap-y-3
        ' onSubmit={submitHandler}>

                {/* firstName lastName div */}

                <div className='input_div_at_576_px flex justify-between items-center'>

                    <label className=' w-full'>
                        <p className='mb-1 text-base'>First Name<sup className=' ml-1 text-red-700' >*</sup></p>
                        <input className=' input_at_576_px text-slate-300 rounded-[0.5rem] p-[9px] border-b-2 border-[#a3adad] bg-[#3f3f43] w-[90%] ' required
                            type='text'
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName} />
                    </label>

                    <label className=' w-full'>
                        <p className='mb-1 text-base'>Last Name<sup className=' ml-1 text-red-700' >*</sup></p>
                        <input className='input_at_576_px text-slate-300 rounded-[0.5rem] p-[9px] border-b-2 border-[#a3adad] bg-[#3f3f43] w-[90%] ' required
                            type='text'
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastName} />
                    </label>

                </div>

                <label>
                    <p>Email Address<sup className=' ml-1 text-red-700'>*</sup></p>
                    <input className='signup_email_576_px text-slate-300 rounded-[0.5rem] p-[9px] border-b-2 border-[#a3adad] bg-[#3f3f43] w-[95%] ' required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email} />

                </label>

                <div className='password_div_at_576_px flex justify-between items-center'>

                    <label className='w-full relative'>
                        <p>Create Password<sup className=' ml-1 text-red-700'>*</sup></p>
                        <input className='password_at_576_px text-slate-300 rounded-[0.5rem] p-[9px] border-b-2 border-[#a3adad] bg-[#3f3f43] w-[95%] ' required
                            type={showPassword ? ('text') : ('password')}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter new Password'
                            value={formData.password} />
                        <span className='absolute right-5 top-[33px]' onClick={() => { setShowPassword((prev) => !prev) }}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#aFB2BF' />) : <AiOutlineEye fontSize={24} fill='#aFB2BF' />}
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p>Confirm Password<sup className=' ml-1 text-red-700'>*</sup></p>
                        <input className='password_at_576_px text-slate-300 rounded-[0.5rem] p-[9px] border-b-2 border-[#a3adad] bg-[#3f3f43] w-[95%] ' required
                            type={showConfirmPassword ? ('text') : ('password')}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword} />

                        <span className='absolute right-5 top-[33px]' onClick={() => { setShowConfirmPassword((prev) => !prev) }}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#aFB2BF' />) : <AiOutlineEye fontSize={24} fill='#aFB2BF' />}
                        </span>

                    </label>

                </div>

                <button className=' mt-5 hover:bg-yellow-500 bg-yellow-400 rounded-[10px] font-medium text-black px-[12px] py-[8px]' >
                    Create Account
                </button>

            </form>

        </div>
    )
}

export default SignUpForm