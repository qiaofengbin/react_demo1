import React, { Component } from 'react'
import { Icon } from 'antd'
import BreadCrumb from '../../../components/Breadcrumb'
import TypingCard from '../../../components/TypingCard'
import BorderComponent from './components/BorderComponent'
import SoildComponent from './components/SoildComponent'
import TowToneComponent from './components/TowToneComponent'
import SearchComponent from './components/SearchComponent'
import './style.css'

class IconDemo extends Component {
    state = {
        tabs: [
            { tabName: '线框风格', icon: 'border', id: 0, theme: "" },
            { tabName: '实底风格', icon: 'appstore', id: 1, theme: "filled" },
            { tabName: '双色风格', icon: 'appstore', id: 2, theme: "twoTone" },
        ],
        currentindex: 2,
        component:[<BorderComponent />,<SoildComponent  />,<TowToneComponent />]
    }
    tabChoiced(id) {
        this.setState({
            currentindex: id
        })
    }
    componentDidUpdate(){
        // console.log(this.state.currentindex)
    }
    render() {
        const cardContent = `使用 Icon 标签声明组件，指定图标对应的 type 属性。`
        const { tabs } = this.state;
        return (
            <div className="Icon_page">
                <BreadCrumb arr={['基本', '图标']} />
                <TypingCard source={cardContent} />
                <h2 id="图标列表" data-scrollama-index="1"><span>图标列表</span></h2>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="ant-radio-group ant-radio-group-solid ant-radio-group-large">
                        {
                            tabs && tabs.map((item, index) => {
                                
                                return (
                                    <label className={`ant-radio-button-wrapper ${index === this.state.currentindex ? "tab_title_active" : " "}`} key={index} onClick={this.tabChoiced.bind(this, item.id)}>
                                        <Icon type={item.icon} theme={item.theme} />&nbsp;
                                        <span>{item.tabName}</span>
                                    </label>
                                )
                            })
                        }
                    </div>
                    {/* <SearchComponent  /> */}
                </div>
                 {/* 组件动态切换 */}
                 <div className="container">
                            {
                                this.state.component.map((item,index)=>{
                                    return <div className={index===this.state.currentindex?' ':'showFlag'} key={index}>{item}</div>
                                })
                            }
                    </div>
            </div>
        )
    }
}
export default IconDemo;