import React, { useContext } from 'react'
 import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext/AuthContext'
 
 const Navbar = () => {
    const {user,signOutUser}=useContext(AuthContext);
    const handleSignOut=()=>{
        signOutUser()
        .then(()=>{
            console.log('successfully logout')
            
        })
        .catch(error=>{
            console.log('failed to sign out')
        })
    }
     const links = <>
          <Link to='/'><li><button>Home</button></li></Link>
          <Link to='/assignment'><li><button>Make Assignment</button></li></Link>
          
      </>
   return (
     <div className="navbar bg-base-100">
     <div className="navbar-start">
         <div className="dropdown">
             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                 <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M4 6h16M4 12h8m-8 6h16" />
                 </svg>
             </div>
             <ul
                 tabIndex={0}
                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                 {links}
             </ul>
         </div>
         <a className="btn btn-ghost text-xl">Group Study</a>
     </div>
     <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1">
             {links}
         </ul>
     </div>
     <div className="navbar-end gap-3">
     {
         user?<>
         <p>{user.email}</p>
         <button onClick={handleSignOut} className='btn'>LogOut</button>
         </>:<>
         <Link to='/signIn'>
         <button className="btn">Sign In</button>
         </Link>
         <Link to='/register'>
         <button className="btn">Register</button>
         </Link>
         </>
        }
     </div>
 </div>
   )
 }
 
 export default Navbar