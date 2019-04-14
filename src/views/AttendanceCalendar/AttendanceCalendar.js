import React, {Component} from 'react'
import { Calendar } from 'antd'

import './style.less'

function getListData(value) {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', }
            ]; break;
        case 10:
            listData = [
                { type: 'warning' }
            ]; break;
        case 15:
            listData = [
                { type: 'warning' }
            ]; break;
        default:
    }
    return listData || [];
}

function dateCellRender(value) {
    const listData = getListData(value);
    console.log(value)
    return (
        <ul className="events">
            {
                listData.map((item, index) => (
                    <i key={ index }>
                        <span className={`event-${item.type}`}>●</span>
                        {item.content}
                    </i>
                ))
            }
        </ul>
    );
}

function getMonthData(value) {
    console.log(value)
    if (value.month() === 8) {
        return 1394;
    }
}

function monthCellRender(value) {
    console.log(value)

    const num = getMonthData(value);
    return num ? (
        <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
        </div>
    ) : null;
}


class AttendanceCalendar extends Component {
     onPanelChange = (value, mode) => {
        console.log(value, mode)
    }
    render() {
        return (
            <div className="temp-admin attendance-calendar">
                <Calendar fullscreen={false} onPanelChange={this.onPanelChange} dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
            </div>
        )
    }
}

export default AttendanceCalendar
