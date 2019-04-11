import React, { Component } from 'react'
import { Form, Select, InputNumber, Switch, Radio,
  Cascader, Button, Col, Upload, Modal, DatePicker, Icon, Input, Card, Tabs, Badge } from 'antd'
import './style.less'
const FormItem = Form.Item
const Option = Select.Option
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const confirm = Modal.confirm
const TabPane = Tabs.TabPane;
const areaData = [{
  value: 'shanghai',
  label: '上海',
  children: [{
    value: 'shanghaishi',
    label: '上海市',
    children: [{
      value: 'pudongxinqu',
      label: '浦东新区',
    }],
  }],
}];


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
    const { getFieldProps } = this.props.form
    return (
      <div className="temp-admin" >
        <Tabs defaultActiveKey="1" >
          <TabPane tab="基本信息" key="1">
            <Card title="王大拿" className="leave-management essential">
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
            </Card>
          </TabPane>
          <TabPane tab="假期申请" key="2">
            <Card title="请假业务"  className="leave-management" extra={<a href="#" onClick={this.showConfirm}>取消</a>} style={{ width: 800 }}>
              <Form  onSubmit={this.handleSubmit} >
                <FormItem
                    label="姓名"
                    hasFeedback
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                  <Input  placeholder="输入请假人姓名或工号" {...getFieldProps('name')} />
                </FormItem>

                {/*<FormItem*/}
                    {/*label="Switch 开关"*/}
                    {/*labelCol={{ span: 8 }}*/}
                    {/*wrapperCol={{ span: 10 }}*/}
                    {/*required*/}
                {/*>*/}
                  {/*<Switch {...getFieldProps('switch', { valuePropName: 'checked' })} />*/}
                {/*</FormItem>*/}

                <FormItem
                    label="请假类型"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    required
                >
                  <Select style={{ width: 200 }}
                          {...getFieldProps('select')}
                  >
                    <Option value="NJ">年休假</Option>
                    <Option value="SJ">事假</Option>
                    <Option value="BJ" disabled>病假</Option>
                    <Option value="LJ">轮休</Option>
                  </Select>
                </FormItem>

                <FormItem
                    label="级联选择"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    required
                    hasFeedback
                >
                  <Cascader style={{ width: 200 }} options={areaData} {...getFieldProps('area')} />
                </FormItem>

                <FormItem
                    label="DatePicker 日期选择框"
                    labelCol={{ span: 8 }}
                    required
                >
                  <Col span={ 6 }>
                    <FormItem>
                      <DatePicker {...getFieldProps('startDate')} />
                    </FormItem>
                  </Col>
                  <Col span={ 1 }>
                    <p className="ant-form-split">-</p>
                  </Col>
                  <Col span={ 6 }>
                    <FormItem>
                      <DatePicker {...getFieldProps('endDate')} />
                    </FormItem>
                  </Col>
                </FormItem>

                <FormItem
                    label="请假天数"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 10 }}
                >
                  <InputNumber min={1} max={10} style={{ width: 100 }}
                               {...getFieldProps('inputNumber', { initialValue: 1 })}
                  />
                  <span className="ant-form-text">天</span>
                </FormItem>
                <FormItem
                    label="备注"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 14 }}
                >
                  <Input type="textarea" placeholder="请填写备注" {...getFieldProps('remark', { initialValue: '' })} />
                </FormItem>

                <FormItem
                    label="附件"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    help="病假请上传相关资料"
                >
                  <Upload name="logo" action="/upload.do" listType="picture" onChange={this.handleUpload}
                          {...getFieldProps('upload', {
                            valuePropName: 'fileList',
                            normalize: this.normFile,
                          })}
                  >
                    <Button type="ghost">
                      <Icon type="upload" /> 点击上传
                    </Button>
                  </Upload>
                </FormItem>

                <FormItem wrapperCol={{ span: 16, offset: 8 }} style={{ marginTop: 24 }}>
                  <Button type="primary" htmlType="submit">提交</Button>
                </FormItem>
              </Form>
            </Card>
          </TabPane>
          <TabPane tab="历史记录" key="3">
            <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </TabPane>
        </Tabs>


      </div>
    )
  }

}
CheckingIn = Form.create()(CheckingIn)
export default CheckingIn;
