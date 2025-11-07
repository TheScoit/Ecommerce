import  { useState } from 'react';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6';
import toast from 'react-hot-toast';
import Axios from '../utils/Axios.js';
import SummaryApi from '../common/SummaryApi.js';
import AxiosToastError from '../utils/AxiosToastError.js';
import {Link, useNavigate} from 'react-router-dom'


const RegisterUser = () => {
  const [data,setData] = useState({
    name: "",
    email: "",
    password : "",
    confirmPassword : "",

  });

  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

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

      if(data.password !== data.confirmPassword){
          toast.error("Password and Confirm Password must be same")
          return
      }
      try {
        const  response = await Axios({   
          ...SummaryApi.register,
          data : data
        })

        if(response.data.error){
          toast.error(response.data.message)
        }

        if(response.data.success){
          toast.success(response.data.message),
          setData({
            name : "",
            email : "",
            password : "",
            confirmPassword: ""
          })
          navigate("/login")
        }
        console.log("response",response)
      } catch (error) {
        AxiosToastError(error)
      }

  }
  return (
    <section className=' w-full container mx-auto px-2 '>
        <div className="bg-white mt-6 my-4 w-full max-w-lg mx-auto rounded p-7">
             <p className='text-center'>Welcome to Emporium</p>

             <form onSubmit={handleSubmit} action="" className='grid gap-2 mt-6'>
              <div className='grid gap-1'>
                <label htmlFor="name">Name 
                </label>
                <input type="text" 
                autoFocus
                className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-light'
                value={data.name}
                onChange={handleChange}
                name='name'
                id='name'
                placeholder='Enter Your Name'
                />
              </div>
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
              </div>
              <div className='grid gap-1'>
                <label htmlFor="password">Confirm Password 
                </label>
                <div className="bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-light">
                <input type={showConfirmPassword ? "text" : "password"} 
                autoFocus
                className='w-full outline-none'
                value={data.confirmPassword}
                onChange={handleChange}
                name='confirmPassword'
                id='confirmPassword'
                placeholder='Enter your Confirm Password'
                />
                <div onClick={() => setShowConfirmPassword(preve => !preve)} className='cursor-pointer'>
                  {
                    showConfirmPassword ? (
                        <FaRegEye/>
                      ):(                 
                        <FaRegEyeSlash/>
                    )
                  }
                </div>
                </div>


              </div>

              <button disabled={!valideValue} className={`${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"}  text-white py-2 rounded font-semibold my-3 tracking-wide `}>
                Register
              </button>
             </form>

             <p className='text-center'>
              Already have account ? <Link className='font-semibold text-green-600 hover:text-green-800' to={"/login"}>Login</Link>
             </p>
        </div>
    </section>
  )
}

export default RegisterUser
