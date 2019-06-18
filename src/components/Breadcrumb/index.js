// 面包屑
import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
import {Link} from 'react-router-dom'

class BreadCrumb extends Component{
    render(){
        const props = this.props;
        return(
            <Breadcrumb style={{margin:'10px 0'}}>
                    <Breadcrumb.Item>
                       <Link to="/home">首页</Link>
                    </Breadcrumb.Item>
                   {
                        props.arr.map((item,index)=>{
                            return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                        })
                   }
                </Breadcrumb>
        )
    }
}
export default BreadCrumb;