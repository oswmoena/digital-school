import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'

export const MainLayout = ({ children }: any) => {
  return (
    <div className='container-layout'><Outlet /></div>
  )
}

// export const Layout = ({ children }: any) => {
//   return (
//     <div className='container-layout'>{children}</div>
//   )
// }

export default MainLayout