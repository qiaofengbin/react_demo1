import React, { Component } from 'react'
import BreadCrumb from '../../../components/Breadcrumb'
import TypingCard from '../../../components/TypingCard'

class DropdownDemo extends Component{
    render(){
        const cardContent = `当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。`
        return(
            <div>
                <BreadCrumb arr={['导航','下拉菜单']}/>
                <TypingCard source = {cardContent} />
            </div>
        )
    }
}
export default DropdownDemo;