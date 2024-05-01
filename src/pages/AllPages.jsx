import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
const AllPages = () => {
  return (
    <>
      < NavBar/>
      < Outlet/>
    </>
  )
}

export default AllPages
