import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { auth } from '../../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
// react-icons
import { CiWarning } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";


export default function RegisterForm() {
    const { register, handleSubmit, formState: {errors}  } = useForm({mode: "onChange"})
   
    const onSubmit = async (data) => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            )
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className='bg-white mx-auto w-[300px] lg:w-[500px] px-6 py-10 shadow-xl rounded-4xl'>
      <div className='flex flex-col items-center'>
        <h2 className='text-[20px] lg:text-[32px] text-green-600 font-bold'>Create your account</h2>
        <p className='mb-2 text-[14px] lg:text-[16px] text-yellow-600 font-medium'>Create your account to get started</p>
      </div>
      <form className='flex flex-col items-center ' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col'>
          <h2 className='flex items-center gap-1 text-[16px] font-bold mb-1 text-gray-600'><MdOutlineMail className='w-6 h-6'/> <span>Email</span></h2>
        <input className='bg-gray-200 px-3 py-2 mb-4 w-64 lg:w-72 rounded-2xl shadow-md focus:outline-none focus:ring focus:ring-green-500/80' {...register("email", {required: "Enter your email",})} placeholder='Enter your email' />
        {errors.email && <p className='flex items-center text-[16px] gap-1 text-red-500 mb-1'><CiWarning className='w-6 h-6'/>{errors.email.message}</p>}
          <h2 className='flex items-center gap-1 text-[16px] font-bold mb-1 text-gray-600'><TbPasswordUser className='w-6 h-6'/><span>Password</span></h2>
        <input className='bg-gray-200 px-3 py-2 mb-4 w-64 lg:w-72 rounded-2xl shadow-md focus:outline-none focus:ring focus:ring-green-500/80' {...register("password", { required: "Create your password", minLength: {
            value: 8,
            message: "Must be 8 characters"
        }})} type="password" placeholder='Create your password'/>
        {errors.password && (
          <p className='flex items-center gap-1 text-red-500 text-[16px] mb-2'>
            <CiWarning className='w-6 h-6'/>
            {errors.password.message}
          </p>
        )}
        </div>
        <p className='text-[16px] mb-2'>Already have an account? <Link className='text-blue-500 font-medium underline' to='/login'>Login</Link></p>
        <button className='px-6 py-2 bg-green-600 w-64 lg:w-72 border-2 border-green-400/60 rounded-2xl text-[20px] text-white font-bold shadow-xl shadow-green-500 active:scale-105 cursor-pointer' type='submit'>Create an account</button>
      </form>
    </div>
  )
}
