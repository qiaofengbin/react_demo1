import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

// const menus = [
//     {
//         title: '首页',
//         icon: 'home',
//         key: '/home'
//     },
//     {
//         title: '基本组件',
//         icon: 'laptop',
//         key: '/home/general',
//         subs: [
//             { key: '/home/general/button', title: '按钮', icon: '', },
//             { key: '/home/general/icon', title: '图标', icon: '', },
//         ]
//     },
//     {
//         title: '导航组件',
//         icon: 'bars',
//         key: '/home/navigation',
//         subs: [
//             { key: '/home/navigation/dropdown', title: '下拉菜单', icon: '' },
//             { key: '/home/navigation/menu', title: '导航菜单', icon: '' },
//         ]
//     }
// ]
class MenuLeft extends Component {
  constructor(props){
    super(props)
   
    this.state = {
        collapsed: false,
    };
  }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    // 导航一级
    renderMenuItem = ({key, icon, title}) => {
        return (
          <Menu.Item key={key}>
            <Link to={key}>
              {icon && <Icon type={icon}/>}
              <span>{title}</span>
            </Link>
          </Menu.Item>
        )
      }
      // 是否有多级菜单
      renderSubMenu = ({key, icon, title, subs}) => {
        return (
          <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
            {
              subs && subs.map(item => {
                return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
              })
            }
          </Menu.SubMenu>
        )
      }
    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['0']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <div style={{height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px'}}></div>
                    {
                        this.props.menus.map((item, index) => {
                               return item.subs&&item.subs.length > 0?this.renderSubMenu(item):this.renderMenuItem(item)
                        })
                    }
                </Menu>
            </div>
        )
    }
}
export default MenuLeft;