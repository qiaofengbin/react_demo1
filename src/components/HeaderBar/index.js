import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon, Button, Dropdown } from 'antd';
import screenfull from 'screenfull' // 可以切换全屏
import './style.css'

class HeaderBar extends Component {
    toggleCollapsed() {
        this.props.onToggle()
    };
    screenfullToggle = () => {
        if (screenfull.enabled) {
            screenfull.toggle()
        }
    }
    // 退出
    logout(){
        console.log(this)
        sessionStorage.clear('isLogin');
        sessionStorage.clear('userInfo');
        this.props.history.push('/login')
    }
    render() {
        const { collapsed } = this.props;
        const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        const menu = (
            <Menu >
                <Menu.ItemGroup title='用户中心' className='menu-group'>
                    <Menu.Item style={{listStyle:'none'}}>你好 - {userInfo[0].username}</Menu.Item>
                    <Menu.Item style={{listStyle:'none'}}>个人信息</Menu.Item>
                    <Menu.Item style={{listStyle:'none'}}><span onClick={this.logout.bind(this)}>退出登录</span></Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title='设置中心' className='menu-group'>
                    <Menu.Item style={{listStyle:'none'}}>个人设置</Menu.Item>
                    <Menu.Item style={{listStyle:'none'}}>系统设置</Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        )
        return (
            <div className="header_page">
                <Button onClick={this.toggleCollapsed.bind(this)} style={{ width: '46px' }}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <div style={{lineHeight: '64px', float: 'right'}}>
                    <ul style={{margin:'0',display: 'flex', width: '200px',listStyle: 'none'}}>
                        <li><Icon type='arrows-alt' onClick={this.screenfullToggle} /></li>
                        <li>
                            <Dropdown overlay={menu}>
                                <img src={userInfo[0].userPic} alt=""/>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
// 添加withRouter可以一直得到this.props.history
export default withRouter(HeaderBar);