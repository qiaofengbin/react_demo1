import React, { Component } from 'react'
import BreadCrumb from '../../../components/Breadcrumb'
import TypingCard from '../../../components/TypingCard'

class UploadDemo extends Component{
    render(){
        const cardContent =  `上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。`
        return(
            <div>
                <BreadCrumb arr={['输入','上传']}/>
                <TypingCard source = {cardContent} />
            </div>
        )
    }
}
export default UploadDemo;