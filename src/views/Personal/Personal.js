import React, { Component } from 'react'
import { Card } from 'antd'

import './style.less'
class Personal extends Component {

  render () {
    const user = [
      {
        type: '姓名',
        value: '王大拿'
      },
      {
        type: '年龄',
        value: '70'
      },
      {
        type: '性别',
        value: '男'
      },
      {
        type: '工龄',
        value: '30'
      },
      {
        type: '年假',
        value: '3'
      },
      {
        type: '状态',
        value: '正常'
      },
      {
        type: '工号',
        value: '8888'
      },
      {
        type: '岗位',
        value: '普工'
      },
      {
        type: '部门',
        value: '一厂焊装'
      },
      {
        type: '科室',
        value: '巴拉巴拉'
      }
    ]
    return (
      <div className="temp-admin" >
          <Card  className="personal" title={user[0].value} bordered={false} >
            {
              user.map((item, index) =>(
                  <p key={index}>
                    <span> { item.type } </span> : <span> { item.value } </span>
                  </p>
                  )
              )
            }
          </Card>
      </div>
    )
  }

}

export default Personal;
