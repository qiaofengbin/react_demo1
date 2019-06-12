import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd';

const { SubMenu }  = Menu;

class SiderNav extends Component{
    state = {
        collapsed: false,
      };
    
      toggleCollapsed() {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render(){
        return(
            <div>
                <Button type="primary" onClick={this.toggleCollapsed.bind(this)} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
            </div>
        )
    }
}
export default SiderNav;
