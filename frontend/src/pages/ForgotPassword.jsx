import  { useState } from 'react';
import toast from 'react-hot-toast';
import Axios from '../utils/Axios.js';
import SummaryApi from '../common/SummaryApi.js';
import AxiosToastError from '../utils/AxiosToastError.js';
import {Link, useNavigate} from 'react-router-dom'


const Forgot = () => {
  const [data,setData] = useState({
    email: "",
  });

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

      try {
        const  response = await Axios({   
          ...SummaryApi.forgot_password,
          data : data
        })

        if(response.data.error){
          toast.error(response.data.message)
        }

        if(response.data.success){
          toast.success(response.data.message)
          navigate("/verification-otp",{
            state: data
          })
          setData({
            email : "",
          })
          
        }
      } catch (error) {
        AxiosToastError(error)
      }

  }
  return (
    <section className=' w-full container mx-auto px-2 '>
        <div className="bg-white mt-6 my-4 w-full max-w-lg mx-auto rounded p-7">
             <p className='text-center'>Welcome Back</p>
             <p className='text-center text-xs text-gray-400'>Forgot to proceed</p>
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
             
            

              <button disabled={!valideValue} className={`${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"}  text-white py-2 rounded font-semibold my-3 tracking-wide `}>
                Send Otp
              </button>
             </form>

             <p className='text-center'>
              Already  have account ? <Link className='font-semibold text-green-600 hover:text-green-800' to={"/login"}>Login</Link>
             </p>
        </div>
    </section>
  )
}

export default Forgot
