import React, {Component} from 'react'

import './style.less'
import {Card, Tabs} from "antd";

class RecordHoliday extends Component {
    render() {
        return (
            <div className="temp-admin">

                    <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>

            </div>
        )
    }
}

export default RecordHoliday
