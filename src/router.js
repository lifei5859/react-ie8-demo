import React, { Component } from 'react';
import { HashRouter as Router, browserHistory, hashHistory, IndexRoute, Route, Redirect, Switch} from 'react-router-dom'

import App from './app'
import Main from './main'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Notice from './views/Notice/Notice'
import Personal from './views/Personal/Personal'
import CheckingIn from './views/CheckingIn/CheckingIn'
import EmployeeList from './views/EmployeeList/EmployeeList'
import PrivateRoute from './components/PriviteRoute/PriviteRoute'
import HolidayRequest from './views/HolidayRequest/HolidayRequest'
import RecordHoliday from './views/RecordHoliday/RecordHoliday'
import AttendanceCalendar from './views/AttendanceCalendar/AttendanceCalendar'
class MyRouter extends Component {
  componentWillMount () {
    if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE","")) < 10){
      console.log(navigator, parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE","")));
      this.setState({
        isHistory: false
      })
    } else {
      console.log(navigator, "您的浏览器版本很好");
      this.setState({
        isHistory: true
      })
    }

  }
  // render () {
  //   const { isHistory } = this.state
  //   return(
  //     <Router history={isHistory ? browserHistory : hashHistory }>
  //       <App>
  //         <Route path="/login" component={ Login } />
  //         <Route path="/" component={ Main } >
  //           <IndexRoute component={ Home } />
  //           <Route path="/notice" component={ Notice } />
  //           <Route path="/personal" component={ Personal } />
  //           <Route path="/tools/checkingIn" component={ CheckingIn } />
  //           <Route path="/tools/employeeList" component={ EmployeeList } />
  //         </Route>
  //         <Redirect from="*" to="/" />
  //       </App>
  //     </Router>
  //   )
  // }
  render () {
    return (
      <Router>
          <App>
              <Switch>
              <Route path="/login" component={Login} />
                  <Route path="/" render={() => (
                      <Main>
                         <Switch>
                             <Route path="/home" component={Home} />
                             <Route path="/notice" component={Notice} />
                             <Route path="/personal" component={Personal} />
                             {/*<Route path="/tools/checkingIn" component={CheckingIn} />*/}
                             <PrivateRoute path="/tools/checkingIn" component={CheckingIn}/>
                             <Route path="/tools/holidayRequest" component={HolidayRequest}/>
                             <Route path="/tools/recordHoliday" component={RecordHoliday}/>
                             <Route path="/tools/attendanceCalendar" component={AttendanceCalendar}/>
                             <Route path="/tools/employeeList" component={EmployeeList} />
                             <Redirect to="/home" />
                         </Switch>
                      </Main>
                  )} />
              </Switch>
          </App>
      </Router>
    )
  }

}

export default MyRouter;
// import React from 'react'
// import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router'
// import App from '../components/App'
// import Inbox from '../components/Inbox'
// import Message from '../components/Message'
// import Count from '../components/Count'
// import Echarts from '../components/Echarts'
// import Video from '../components/Video'
// import Video2 from '../components/Video2'
// import Video3 from '../components/Video3'
// import Video4 from '../components/Video4'

// const Routes = () => (
//     <Router history={hashHistory}>
//         <Route path="/" component={App}>
//             <IndexRoute component={Inbox} />
//             <Route path="inbox" component={Inbox}>
//                 <Route path="messages/:id" component={Message} />
//             </Route>
//             <Route path="count" component={Count}></Route>
//             <Route path="chart" component={Echarts}></Route>
//             <Route path="video" component={Video}></Route>
//             <Route path="video2" component={Video2}></Route>
//             <Route path="video3" component={Video3}></Route>
//             <Route path="video4" component={Video4}></Route>
//         </Route>
//         <Redirect from="*" to="/" />
//     </Router>
// )

// export default Routes;
