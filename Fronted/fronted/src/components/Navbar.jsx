import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import {NavLink, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

  const navigate=useNavigate();
  const{token,setToken,userData}=useContext(AppContext)
  
  const [showMenu, setShowMenu]=useState(false);
  
  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/')
  }
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <p className='text-2xl font-bold text-primary tracking-wide'>
        Smart Healthcare Assistant
      </p>

        {/* Navigation Links */}
        <ul className='hidden md:flex items-start gap-5 font-medium'>
           <NavLink to='/'>
              <li className='py-1'>HOME</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
           </NavLink>
           <NavLink to='/doctors'>
              <li className='py-1'>ALL DOCTORS</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
           </NavLink>
           <NavLink to='/about'>
              <li className='py-1'>ABOUT</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
           </NavLink>
           <NavLink to='/contact'>
              <li className='py-1'>CONTACT</li>
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
           </NavLink>

           


          
           <a target="_blank" href="http://localhost:5174" class="border px-5 text-xs py-1.5 rounded-full">Admin/Doctor Panel</a>
           
        </ul>

            {/* Profile / Login Button */}
        <div className='flex items-center gap-4'>
          {
            token && userData
            ?<div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt=""/>
              <img className='w-2.5'src={assets.dropdown_icon} alt=""/>
              <div className='absolute top-0 right-0  pt-14 text-base font-medium text-gray-600 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My profile</p>
                  <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>

            </div>
            :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create Account</button>

          }
       <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

{/* ---- Mobile Menu ---- */}
<div className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${showMenu ? 'fixed w-full' : 'h-0 w-0'}`}>
  <div className='flex items-center justify-between px-5 py-6'>
    <img src={assets.logo} className='w-36' alt="" />
    <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
  </div>
  <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
    <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
    <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink>
    <NavLink onClick={() => setShowMenu(false)} to='/symptom-checker'> <p className='px-4 py-2 rounded full inline-block'>SYMPTOM CHECKER</p></NavLink>
    <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
    <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>

  </ul>
</div>
</div>
</div>
)
}

export default Navbar