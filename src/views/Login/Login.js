import React, { Component } from 'react'
import { Card } from 'antd'
import './style.less'
import { Button, Form, Input, Modal } from 'antd';
import api from '../../api'
const confirm = Modal.confirm;
const createForm = Form.create;
const FormItem = Form.Item;
function noop () {
  return false
}
class Login extends Component {
  componentDidMount() {
    api.getUser().then(res => {
      console.log(res)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  }
  checkPass = (rule, value, callback) => {
    const { validateFields } = this.props.form;
    if (value) {
      validateFields(['rePasswd'], { force: true });
    }
    callback();
  }
  userExists = (rule, value, callback) => {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (value.length < 5) {
          callback([new Error('用户名至少为 5 个字符')]);
        } else {
          callback();
        }
      }, 800);
    }
  }
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
        // { required: true, min: 5, message: '用户名至少为 5 个字符' },
        { validator: this.userExists },
      ],
    });
    const passwdProps = getFieldProps('passwd', {
      rules: [
        { required: true, whitespace: true, message: '请填写密码' },
        { validator: this.checkPass },
      ],
    });
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
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
            >
              <Input {...passwdProps} type="password" autoComplete="off" placeholder="请输密码"
                     onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
              />
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
