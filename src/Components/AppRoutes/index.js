import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard'
import Inventory from '../../Pages/Inventory'
import Orders from '../../Pages/Orders'
import Customers from '../../Pages/Customers'


export default function AppRoutes() {
  return (
   

   <Routes>
    <Route exact path='/' element={<Dashboard/>}/>
    <Route exact path='/inventory' element={<Inventory/>}/>
    <Route exact path='/orders' element={<Orders/>}/>
    <Route exact path='/customers' element={<Customers/>}/>
   </Routes>

  )
}
