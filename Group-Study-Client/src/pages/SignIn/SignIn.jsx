import React from 'react'
 
 import Lottie from 'lottie-react'
 import { useContext } from 'react'
 import LoginLottie from '../../assets/lottie/Login.json'
 import AuthContext from '../../context/AuthContext/AuthContext'
import SocialLogin from '../shared/SocialLogin'
import { useLocation, useNavigate } from 'react-router-dom'
 const SignIn = () => {
     const {signInUser}=useContext(AuthContext)
     const location=useLocation();
     const navigate=useNavigate();
     console.log('in signIn page', location)
     const from = location.state || '/';
     const handleSignIn=e=>{
         e.preventDefault();
         const form=e.target;
         const email=form.email.value;
         const password=form.password.value;
         // console.log(email,password);
         signInUser(email,password)
         .then(result=>{
             console.log(result.user)
             navigate(from)
         })
         .catch(error=>{
             console.log(error.message)
         })
 
 
     }
   return (
     <div className="hero bg-base-200 min-h-screen">
     <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="text-center lg:text-left w-96">
             
            <Lottie animationData={LoginLottie} ></Lottie>
         </div>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="ml-8 mt-4 text-5xl font-bold">Login now!</h1>
             <form onSubmit={handleSignIn} className="card-body">
                 <div className="form-control">
                     <label className="label">
                         <span className="label-text">Email</span>
                     </label>
                     <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                 </div>
                 <div className="form-control">
                     <label className="label">
                         <span className="label-text">Password</span>
                     </label>
                     <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                     <label className="label">
                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
                 </div>
                 <div className="form-control mt-6">
                     <button className="btn btn-primary">Login</button>
                 </div>
             </form>
             <SocialLogin></SocialLogin>
         </div>
     </div>
 </div>
   )
 }
 
 
 
 export default SignIn