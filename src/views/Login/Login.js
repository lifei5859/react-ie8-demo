import React, { Component } from 'react'
import { Card } from 'antd'
import './style.less'
import cookie from 'js-cookie'
import { Button, Form, Input, Modal } from 'antd'
import api from '../../api'
const confirm = Modal.confirm
const createForm = Form.create
const FormItem = Form.Item

class Login extends Component {
  componentDidMount() {
    api.getUser().then(res => {
      if ( res.statusText === 'OK' ) {
        const temp = res.data
        console.log(res)
        this.setState({

        })
      }
    })
  }

  // 发送form表单
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        return;
      }
      console.log(values);
      api.userLogin(values).then(res => {
        console.log(res)

        if (res.data === 'ok') {
          console.log('ok')
          cookie.set('login', 'true', { expires: 7 })
        }
      })
    });
  }
  //密码格式验证
  checkPass = (rule, value, callback) => {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (!/^[\w]{6,12}$/.test(value)) {
          callback([new Error('密码少为6-12位字母数字_')])
        } else {
          callback();
        }
      }, 400);
    }
  }
  //工号格式验证
  userExists = (rule, value, callback) => {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (!/^\d{6}$/.test(value)) {
          callback([new Error('工号为6位数字')]);
        } else {
          callback();
        }
      }, 400);
    }
  }
  //路由切换弹窗
  showConfirm = () => {
    console.log(this)
    confirm({
      title: '确定要离开吗？',
      content: '不登陆一些功能将无法使用',
      onOk: () => {
        this.props.history.push('/')
      },
      onCancel() {},
    })
  }
  render () {
    const {getFieldProps, getFieldError, isFieldValidating } = this.props.form
    const nameProps = getFieldProps('name', {
      rules: [
        { required: true, message: '用户名不能为空' },
        { validator: this.userExists },
      ]
    })
    const passwdProps = getFieldProps('passwd', {
      rules: [
        { required: true, whitespace: true, message: '请填写密码' },
        { validator: this.checkPass },
      ]
    })
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 }
    }
    return (
        <div className="login-wrapper">
          <div className="login-logo"><i className="iconfont icon-LOGOsheji"> logo</i> </div>
          <Card className="login-card" title="员工登陆">
            <Form>
              <FormItem
                  {...formItemLayout}
                  label="用户名"
                  hasFeedback
                  help={isFieldValidating('name') ? '校验中...' : (getFieldError('name') || []).join(', ')}
              >
                <Input {...nameProps} placeholder="请输入工号" />
              </FormItem>

              <FormItem
                  {...formItemLayout}
                  label="密码"
                  hasFeedback
                  // help={isFieldValidating('passwd') ? '校验中...' : (getFieldError('passwd') || []).join(', ')}
              >
                <Input {...passwdProps} type="password" autoComplete="off" placeholder="请输密码"/>
              </FormItem>
              <FormItem wrapperCol={{ span: 12, offset: 7 }}>
                <Button type="primary" onClick={ this.handleSubmit }>提交</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="ghost"  onClick={ this.showConfirm } >取消</Button>
              </FormItem>
            </Form>
          </Card>
        </div>
    )
  }

}
Login = createForm()(Login)
export default Login
