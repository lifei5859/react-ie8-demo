import React, {Component} from 'react'
import { Menu, Icon } from 'antd'
import { Link } from "react-router-dom"
import '../../style/base.less'
import './style.less'
import NavConf from '../../config/navConfig'
const SubMenu = Menu.SubMenu



class NavHeader extends Component {
    constructor (props) {
        super(props)
    }

    componentWillMount() {
        const navTree = this.renderNav(NavConf)
        const current = window.location.href.split('#')[1]
        this.setState({
            navTree,
            current: ''
        })
    }


    renderNav = (data) => {
        return data.map((item)=>{
            if (item.children){
                return (
                    <SubMenu title={<span> <Icon type={ item.type } />{ item.name } </span>} key={item.key}>
                        { this.renderNav(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                        <Link to={item.key}> <Icon type={ item.type } />{ item.name } </Link>
                   </Menu.Item>
        })
    }
    // getInitialState = () => {
    //     return {
    //         current: 'mail',
    //     };
    // }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        })
    }
    render() {
        return (
            <div>
                <Menu onClick={this.handleClick}
                      selectedKeys={[this.state.current]}
                      mode="horizontal"
                      className="header-nav"
                >
                    {
                        // NavConf.map(item => (
                        //     <Menu.Item key={ item.key } className="margin-left">
                        //         <Icon type={ item.type } />{ item.name }
                        //     </Menu.Item>
                        // ))
                        this.state.navTree
                    }
                </Menu>
            </div>
        );
    }
}

export default NavHeader;
