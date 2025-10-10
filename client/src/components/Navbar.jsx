import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 shadow-md bg-white">
      {/* Logo */}
      <img src={assets.logo} alt="CarePoint Logo" className="h-12" width={250} />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center group ${isActive ? 'text-blue-600' : ''}`
            }
          >
            <span className="py-1">HOME</span>
            <hr className="border-none outline-none h-0.5 bg-blue-600 w-0 group-hover:w-3/5 transition-all duration-300" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              `flex flex-col items-center group ${isActive ? 'text-blue-600' : ''}`
            }
          >
            <span className="py-1">DOCTORS</span>
            <hr className="border-none outline-none h-0.5 bg-blue-600 w-0 group-hover:w-3/5 transition-all duration-300" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex flex-col items-center group ${isActive ? 'text-blue-600' : ''}`
            }
          >
            <span className="py-1">ABOUT</span>
            <hr className="border-none outline-none h-0.5 bg-blue-600 w-0 group-hover:w-3/5 transition-all duration-300" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex flex-col items-center group ${isActive ? 'text-blue-600' : ''}`
            }
          >
            <span className="py-1">CONTACT</span>
            <hr className="border-none outline-none h-0.5 bg-blue-600 w-0 group-hover:w-3/5 transition-all duration-300" />
          </NavLink>
        </li>
      </ul>

      {/* Create Account Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        CREATE ACCOUNT
      </button>
    </div>
  )
}

export default Navbar