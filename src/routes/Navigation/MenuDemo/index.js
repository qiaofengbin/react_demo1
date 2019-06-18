import React, { Component } from 'react'
import BreadCrumb from '../../../components/Breadcrumb'
import TypingCard from '../../../components/TypingCard'

class MenuDemo extends Component{
    render(){
        const cardContent = `导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。`
        return(
            <div>
                <BreadCrumb arr={['导航','导航菜单']}/>
                <TypingCard source = {cardContent} />
            </div>
        )
    }
}
export default MenuDemo;