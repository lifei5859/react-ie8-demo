import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Select, InputNumber, Switch, Radio,
  Cascader, Button, Col, Upload, Modal, Icon, Input, Card, Tabs, Badge } from 'antd'
import './style.less'
const FormItem = Form.Item
const Option = Select.Option
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const confirm = Modal.confirm
const TabPane = Tabs.TabPane;


class CheckingIn extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  }

  normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  showConfirm = (e) => {
    e.preventDefault()
    confirm({
      title: '您是否确认要删除这项内容',
      content: '一些解释',
      onOk: () => {
        this.props.history.push('/')
      },
      onCancel() {},
    });
  }
  render () {

    return (
      <div className="temp-admin" >
            <Card title="王大拿(000124)" extra={<span>操作工</span>} className="leave-management essential">
              <div>
                <Badge count={5}>
                  <a href="#" className="head-example">已请事假 </a>
                </Badge>
                <Badge count={5}>
                  <a href="#" className="head-example">已请年假 </a>
                </Badge>
                <Badge count={5}>
                  <a href="#" className="head-example">已请病假</a>
                </Badge>
                <Badge count={5}>
                  <a href="#" className="head-example"> 外勤天数 </a>
                </Badge>
                <Badge count={5}>
                  <a href="#" className="head-example"> 已请串休 </a>
                </Badge>
                <Badge count={5}>
                  <a href="#" className="head-example">出差天数 </a>
                </Badge>
              </div>
              <div style={{marginTop: 20}}>
                <Badge count={5}>
                  <a href="#" className="head-example">旷工 </a>
                </Badge>
                <Badge count={5}>
                  <a href="#" className="head-example">早退 </a>
                </Badge>
                <Badge count={5}>
                  <a href="#" className="head-example">迟到 </a>
                </Badge>
                <Badge count={5}>
                  <a href="#" className="head-example">打卡异常 </a>
                </Badge>
                <Badge count={5}>
                  <a href="#" className="head-example"> 补打卡 </a>
                </Badge>
                <Badge count={5}>
                  <a href="#" className="head-example"> 审批中... </a>
                </Badge>
              </div>
              <p className="leave-hint">提示: 年休假已休3天，剩余2天，审批中0天。</p>
              <p className="leave-btn-wrap">
                <Button><Link to="/tools/holidayRequest">假期申请</Link></Button>
                <Button><Link to="/tools/attendanceCalendar">考勤日历</Link></Button>
                <Button><Link to="/tools/recordHoliday">请假记录</Link></Button>
              </p>
            </Card>
      </div>
    )
  }

}
export default CheckingIn;
