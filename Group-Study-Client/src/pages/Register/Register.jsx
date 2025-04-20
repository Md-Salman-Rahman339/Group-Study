import React from 'react'
import registerLottie from '../../assets/lottie/register.json' 
import Lottie from 'lottie-react'
 const Register = () => {

    const handleregister=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);


    }
   return (
     <div className="hero bg-base-200 min-h-screen">
     <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="text-center lg:text-left">
             
             <Lottie animationData={registerLottie}></Lottie>
         </div>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
             <form onSubmit={handleregister} className="card-body">
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
                     <button className="btn btn-primary">Register</button>
                 </div>
             </form>
         </div>
     </div>
 </div>
   )
 }
 
 export default Register