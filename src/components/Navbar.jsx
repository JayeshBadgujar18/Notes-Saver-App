import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (

    <div className="w-full flex  justify-between items-center bg-gradient-to-r from-red-500 via-yellow-500 to-lime-500 shadow-md"> 

        <div className="flex flex-row gap-4 p-4 text-blue-500 ">
      <NavLink to="/" className="hover:text-blue-300">
        Home
      </NavLink>

      <NavLink to="/pastes" className="hover:text-blue-300">
        Pastes
      </NavLink>
    </div>


    </div>

  
 
  )
}

export default Navbar