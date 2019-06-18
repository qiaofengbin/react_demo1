import React, { Component } from 'react'
import BreadCrumb from  '../../../components/Breadcrumb'
import TypingCard from '../../../components/TypingCard'

class FormDemo2 extends Component{
    render(){
        const cardContent = `当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。`
        return(
            <div>
                <BreadCrumb arr={['输入','表单','分步表单']}/>
                <TypingCard source = {cardContent} />
            </div>
        )
    }
}
export default FormDemo2;