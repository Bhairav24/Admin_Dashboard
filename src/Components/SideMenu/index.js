import { AppstoreAddOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, { useState,useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

export default function SideMenu() {
const location=useLocation()

const [selectedKeys,setSelectedKeys]=useState('/')
useEffect(() => {
  
const pathName=location.pathname

setSelectedKeys(pathName)
 
}, [location.pathname])






    const navigate=useNavigate()
  return (
    <div className='SideMenu'>

   <Menu 

   onClick={(item)=>{
    //item.key

    //Routes to navigate logic

    navigate(item.key);
   }}

   selectedKeys={[selectedKeys]}
   items={[
    {
        label:'Dashboard',
        icon:<AppstoreAddOutlined/>,
        key:'/'
    },
    {
        label: 'Inventory',
        key:'/inventory',
        icon:<ShopOutlined/>
    },

    {
        label: 'Orders',
        key:'/orders',
        icon:<ShoppingCartOutlined/>
    },
    {
        label: 'Customers',
        key:'/customers',
        icon:<UserOutlined/>
    }

   ]}>


   </Menu>
    </div>
  )
}
