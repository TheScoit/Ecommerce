import  { useState } from 'react';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6';
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi.js';
import AxiosToastError from '../utils/AxiosToastError.js';
import {Link, useNavigate} from 'react-router-dom'
import fetchUserDetails from '../utils/fetchUserDetails.js';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../store/userSlice.js';

const Login = () => {
  const [data,setData] = useState({
    email: "",
    password : "",
  });

  const [showPassword,setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = (e)=>{
     const {name , value} = e.target

     setData((preve)=>{
        return{
          ...preve,
          [name] : value
        }
     })
  }

  const valideValue = Object.values(data).every(el => el)

  const handleSubmit =async (e) =>{
      e.preventDefault()

      try {
        const  response = await Axios({   
          ...SummaryApi.login,
          data : data
        })

        if(response.data.error){
          toast.error(response.data.message)
        }

        if(response.data.success){
          toast.success(response.data.message)
          localStorage.setItem('accessToken',response.data.data.accessToken)
          localStorage.setItem('refreshToken',response.data.data.refreshToken)

          const userDetails = await fetchUserDetails()
          dispatch(setUserDetails(userDetails.data))

          setData({
            email : "",
            password : ""
          })
          navigate("/")
        }
      } catch (error) {
        AxiosToastError(error)
      }

  }
  return (
    <section className=' w-full container mx-auto px-2 '>
        <div className="bg-white mt-6 my-4 w-full max-w-lg mx-auto rounded p-7">
             <p className='text-center'>Welcome Back</p>
             <p className='text-center text-xs text-gray-400'>Login to proceed</p>

             <form onSubmit={handleSubmit} action="" className='grid gap-2 mt-6'>
              
              <div className='grid gap-1'>
                <label htmlFor="email">Email 
                </label>
                <input type="text" 
                autoFocus
                className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-light'
                value={data.email}
                onChange={handleChange}
                name='email'
                id='email'
                placeholder='Enter Your Email'
                />
              </div>
              <div className='grid gap-1'>
                <label htmlFor="password">Password </label>
                <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-light'>
                <input type={showPassword ? "text" : "password"}  
                autoFocus   
                className='w-full outline-none'  
                value={data.password}
                onChange={handleChange}
                name='password'
                id='password'
                placeholder='Enter Your Password'
                />
                <div onClick={() => setShowPassword(preve => !preve)} className='cursor-pointer'>
                  {
                    showPassword ? (
                        <FaRegEye/>
                      ):(                 
                        <FaRegEyeSlash/>
                    )
                  }
                </div>
                </div>
                <Link to={'/forgot-password'} className='block ml-auto hover:text-secondary-dark'>Forgot Password ?</Link>
              </div>
            

              <button disabled={!valideValue} className={`${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"}  text-white py-2 rounded font-semibold my-3 tracking-wide `}>
                Login
              </button>
             </form>

             <p className='text-center'>
              Doesn&apos;t have account ? <Link className='font-semibold text-green-600 hover:text-green-800' to={"/register"}>Register</Link>
             </p>
        </div>
    </section>
  )
}

export default Login
