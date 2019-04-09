import React, { Component } from 'react'
import { Table } from 'antd'

import './style.less'

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '住址', dataIndex: 'address', key: 'address' },
  { title: '操作', dataIndex: '', key: 'x', render: () => <a href="#">删除</a> },
];

const data = [
  { key: 1, name: '胡彦斌', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。' },
  { key: 2, name: '吴彦祖', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。' },
  { key: 3, name: '李大嘴', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。' },
];

class EmployeeList extends Component {

  render () {
    return (
      <div className="temp-admin" >
        <Table columns={columns}
               expandedRowRender={record => <p>{record.description}</p>}
               dataSource={data}
               className="table"
        />
      </div>
    )
  }

}

export default EmployeeList;
