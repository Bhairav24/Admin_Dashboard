import { Avatar, Space, Table, Typography } from 'antd'
import React, { useState,useEffect } from 'react'
import { getCustomers } from '../../API'

export default function Customers() {


  const [loading,setLoading]=useState(false)
  const [dataSource,setDataSource]=useState([])


  useEffect(() => {
    setLoading(true); // Set loading to true before making the request
  
  getCustomers()
      .then(res => {
        setDataSource(res.users); // Assuming res has a 'products' property
        setLoading(false); // Set loading to false after the request is successful
      })
      .catch(err => {
        console.error("Error fetching inventory:", err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);


  
  return (
   

      <Space size={20} direction='vertical'>
<Typography.Title level={4}>
  Customers
</Typography.Title>

        <Table loading={loading} columns={[

{
  title:'Photo',
  dataIndex:'image',
  render:(link)=>{
    return <Avatar src={link}/>
  }
},
          {
            title:'First Name',
            dataIndex:'firstName'
          },
          {
            title:'Last Name',
            dataIndex:'lastName',
           
          },
          {
            title:'Email',
            dataIndex:'email',
           
          },
          {
            title:'Phone',
            dataIndex:'phone'
          },
         
          {
            title:'Address',
            dataIndex:'address',
            render:(address)=>{
              return <span>{address.address},{address.city}</span>
            }
          }
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize:5
        }}
        
        ></Table>

        </Space>
   
  )
}
