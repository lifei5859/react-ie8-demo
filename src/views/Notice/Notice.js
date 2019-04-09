import React, { Component } from 'react'
import { Row, Col, Card, Tabs, Tag } from "antd"
import './style.less'

const TabPane = Tabs.TabPane

class Notice extends Component {

  render () {
    return (
      <Row className="temp-admin notice-wrapper" >
        <Col span={17}>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="选项卡一" key="1" className="tab-item">
              <Card title="Card title" extra={<Tag color="green">绿色</Tag>} className="notice-item" >
                <p>111111</p>
              </Card>
              <Card title="Card title" extra={<a href="#">More</a>} className="notice-item" >
                <p>111111</p>
              </Card>
              <Card title="Card title" extra={<a href="#">More</a>} className="notice-item" >
                <p>111111</p>
              </Card>
              <Card title="Card title" extra={<a href="#">More</a>} className="notice-item" >
                <p>111111</p>
              </Card>

            </TabPane>
            <TabPane tab="选项卡一" key="2" className="tab-item">
              <Card title="Card title" extra={<Tag color="green">绿色</Tag>} className="notice-item" >
                <p>111111</p>
              </Card>
              <Card title="Card title" extra={<a href="#">More</a>} className="notice-item" >
                <p>111111</p>
              </Card>
              <Card title="Card title" extra={<a href="#">More</a>} className="notice-item" >
                <p>111111</p>
              </Card>
              <Card title="Card title" extra={<a href="#">More</a>} className="notice-item" >
                <p>111111</p>
              </Card>

            </TabPane>
            <TabPane tab="选项卡一" key="3" className="tab-item">
              <Card title="Card title" extra={<Tag color="green">绿色</Tag>} className="notice-item" >
                <p>111111</p>
              </Card>
              <Card title="Card title" extra={<a href="#">More</a>} className="notice-item" >
                <p>111111</p>
              </Card>
              <Card title="Card title" extra={<a href="#">More</a>} className="notice-item" >
                <p>111111</p>
              </Card>
              <Card title="Card title" extra={<a href="#">More</a>} className="notice-item" >
                <p>111111</p>
              </Card>

            </TabPane>
          </Tabs>

        </Col>
        <Col span={6} offset={ 1 }>
          <Tabs defaultActiveKey="1"  className="tab-item">
            <TabPane tab="选项卡一" key="1">
              <Card title="Card title" extra={<Tag color="green">绿色</Tag>} >
                <p>111111</p>
              </Card>
            </TabPane>
          </Tabs>

        </Col>
      </Row>
    )
  }

}

export default Notice;
