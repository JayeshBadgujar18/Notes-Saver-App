import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (

    <div className="w-screen  flex justify-center  items-center  bg-gradient-to-r from-red-500 via-yellow-500 to-lime-500 shadow-md"> 

        <div className="flex flex-row gap-4 p-4 text-black-500 ">
      <NavLink to="/" className="hover:text-blue-900">
        Home
      </NavLink>

      <NavLink to="/pastes" className="hover:text-blue-900">
        Pastes
      </NavLink>
    </div>


    </div>

  
 
  )
}

export default Navbar