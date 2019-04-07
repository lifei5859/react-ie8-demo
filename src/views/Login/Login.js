import React, { Component } from 'react'
import { Card } from 'antd'
import './style.less'
class Login extends Component {

  render () {
    return (
      <div className="login-wrapper">
        <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    )
  }

}

export default Login;
