
import {BellFilled,MailOutlined} from '@ant-design/icons'
import React from 'react'
import { Badge, Image, Space, Typography } from 'antd'
export default function AppHeader() {
  return (
    <div className='AppHeader'>
       <Image width={40}  src=''> </Image>
       <Typography.Title>
        Bhairav Dashboard
       </Typography.Title>


       <Space>
        <Badge count={10} dot>
        <MailOutlined style={{fontSize:'22'}}/>
        </Badge>


        <Badge count={20}>
        <BellFilled  style={{
          fontSize:'22'
        }}/>

        </Badge>
       
       </Space>
    </div>
  )
}
