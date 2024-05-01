import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-gray-500 text-white">
    
          <div className="flex justify-between h-16">
          
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink to={'/crud'} className="nav-link">CRUD</NavLink>
              <NavLink to={'/data'} className="nav-link">Manipulation</NavLink>
              <NavLink to={'/data-display'} className="nav-link">Display</NavLink>
              <NavLink to={'/dom'} className="nav-link">Router-Dom</NavLink>
              <NavLink to={'/form'} className="nav-link">Forms</NavLink>
              <NavLink to={'/hook'} className="nav-link">Hooks</NavLink>
              <NavLink to={'/image'} className="nav-link">Galleries</NavLink>
              <NavLink to={'/props'} className="nav-link">Props</NavLink>
              <NavLink to={'/selection'} className="nav-link">Data-Selection</NavLink>
              <NavLink to={'/styling'} className="nav-link">Style</NavLink>
            </div>
          </div>
       
      
    </nav>
  )
}

export default NavBar
