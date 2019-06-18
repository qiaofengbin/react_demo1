import React, { Component } from 'react'
import BreadCrumb from  '../../../components/Breadcrumb'
import TypingCard from '../../../components/TypingCard'

class FormDemo1 extends Component{
    render(){
        const cardContent = `用于创建一个实体或收集信息。需要对输入的数据类型进行校验时`
        return(
            <div>
                <BreadCrumb arr={['输入','表单','基础表单']}/>
                <TypingCard source = {cardContent} />
            </div>
        )
    }
}
export default FormDemo1;