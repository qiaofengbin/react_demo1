import React, { Component } from 'react'
import { Layout } from 'antd';
import MenuLeft from '../../components/MenuLeft'
import HeaderBar from '../../components/HeaderBar'
import ContentMain from '../../components/ContentMain'
const { Header, Footer, Sider, Content } = Layout;

class Index extends Component {
    state = {
        collapsed: false
      }
    
      toggle = () => {
        // console.log(this)  状态提升后，到底是谁调用的它
        this.setState({
          collapsed: !this.state.collapsed
        })
      }
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <Layout style={{width:'100%',height:'100%'}}>
                    <Sider ollapsible = "true"
                            trigger={null}
                            collapsed={this.state.collapsed}>
                        <MenuLeft />
                    </Sider>
                    <Layout style={{display:'flex',flexDirection:'column'}}>
                        <Header style={{padding:'0'}}>
                            <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>
                        </Header>
                        <Content style={{flex:'1'}}>
                            <ContentMain />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default Index;