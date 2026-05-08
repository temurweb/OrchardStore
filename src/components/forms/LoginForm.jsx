import React from 'react'
import { useForm } from 'react-hook-form'
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
// react-icons
import { CiWarning } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
// react-router-dom
import { Link } from 'react-router-dom';
// react hooks
import { useNavigate } from 'react-router-dom';
// useTranslation
import { useTranslation } from 'react-i18next';

export default function LoginForm() {
    const { t } = useTranslation()

    const { register, handleSubmit, formState: {errors}} = useForm()

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password,
          ) 
          navigate('/')
          console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className='bg-white w-[300px] lg:w-[500px] mx-auto rounded-4xl px-6 py-10'>
      <div className='flex flex-col items-center'>
        <h2 className='text-center text-green-600 font-bold text-[20px] lg:text-[32px]'>{t("Login.Login")}</h2>
        <h2></h2>
      </div>
      <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col'>
          <h2 className='flex items-center gap-1 text-[16px]'><MdOutlineMail/> {t("Login.Email")}</h2>
        <input className='mb-4 w-64 lg:w-72 px-3 py-2 bg-gray-200 rounded-2xl focus:outline-none focus:ring focus:ring-green-500/80' {...register("email", {required: t("Login.input_title_1")})} placeholder={t("Login.input_title_1")} />
        {errors.email && (
          <p className='flex items-center gap-1 text-red-500 text-[16px] mb-2'>
            <CiWarning className='w-6 h-6'/>
            {errors.email.message}
          </p>
        )}
          <h2 className='flex items-center gap-1 text-[16px]'><TbPasswordUser/> {t("Login.Password")}</h2>
        <input  className='mb-4 w-64 lg:w-72 px-3 py-2 bg-gray-200 rounded-2xl focus:outline-none focus:ring focus:ring-green-500/80' {...register("password", {required: t("Login.input_title_2"), minLength: {
          value: 8,
          message: t("Login.message_1")
        }})} type="password" placeholder={t("Login.input_title_2")}/>
        {errors.password && (
          <p className='flex items-center gap-1 text-red-500 text-[16px] mb-2'>
            <CiWarning className='w-6 h-6'/>
           {errors.password.message}
          </p>
        )}
        </div>
        <p className='text-[16px] mb-2'>{t("Login.title_1")} <Link to='/register' className='text-blue-500 font-medium underline'>Register</Link></p>
        <button className='px-6 py-2 bg-green-600 w-52 lg:w-72 border-2 border-green-400/60 rounded-2xl text-[20px] text-white font-bold shadow-xl shadow-green-500 active:scale-105 cursor-pointer' type='submit'>{t("Login.button_1")}</button>
      </form>
    </div>
  )
}
