import {  Space, Table, Typography } from 'antd'
import React, { useState,useEffect } from 'react'
import { getOrders } from '../../API'

export default function Orders() {


  const [loading,setLoading]=useState(false)
  const [dataSource,setDataSource]=useState([])


  useEffect(() => {
    setLoading(true); // Set loading to true before making the request
  
  getOrders()
      .then(res => {
        setDataSource(res.products); // Assuming res has a 'products' property
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
    Orders
</Typography.Title>

        <Table loading={loading} columns={[


          {
            title:'Title',
            dataIndex:'title'
          },
          {
            title:'Price',
            dataIndex:'price',
            render:(value)=><span>
            $
          </span>
            
          },
          {
            title:'Quantity',
            dataIndex:'quantity'
           
          },
          {
            title:'Total',
            dataIndex:'total'
          },
         
          {
            title:'Discounted Price',
            dataIndex:'discountedPrice',
            render:(value)=><span>
            $
          </span>
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
