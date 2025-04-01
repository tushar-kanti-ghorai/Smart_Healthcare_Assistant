import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

 return (
  <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <p className="text-2xl font-bold text-primary tracking-wide cursor-pointer">
          Smart Healthcare Assistant
        </p>
        <p className="border px-2 py-0.5 rounded-full border-gray-500 text-gray-600 text-[10px] sm:text-xs">
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>
      <p className="text-sm text-black font-bold">Dashboard Panel</p>
    </div>
    <button onClick={() => logout()} className="bg-primary text-white text-sm px-10 py-2 rounded-full">
      Logout
    </button>
  </div>
);

  
}

export default Navbar