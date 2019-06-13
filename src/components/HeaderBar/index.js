import React, { Component } from 'react'
import { Menu, Icon, Button, Dropdown } from 'antd';
import screenfull from 'screenfull' // 可以切换全屏
import './style.css'

const { SubMenu } = Menu;

class HeaderBar extends Component {
    constructor(props) {
        super(props)

    }
    toggleCollapsed() {
        this.props.onToggle()
    };
    screenfullToggle = () => {
        if (screenfull.enabled) {
          screenfull.toggle()
        }
      }
    render() {
        const { collapsed } = this.props
        return (
            <div className="header_page">
                <Button onClick={this.toggleCollapsed.bind(this)} style={{width:'46px'}}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <div style={{flex:'1',textAlign:'right'}}>
                    <ul className='header-ul'>
                        <li><Icon type='arrows-alt' onClick={this.screenfullToggle} /></li>
                        {/* <li onClick={() => this.setState({ count: 0 })}>
                            <Badge count={appStore.isLogin ? count : 0} overflowCount={99} style={{ marginRight: -17 }}>
                                <Icon type="notification" />
                            </Badge>
                        </li>
                        <li>
                            {appStore.isLogin ? login : notLogin}
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}
export default HeaderBar;