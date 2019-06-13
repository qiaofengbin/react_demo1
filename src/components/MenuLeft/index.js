import React, { Component } from 'react'
import MenuList from '../MenuList'

class MenuLeft extends Component{
    constructor(props){
        super(props)
        this.state={
            menus :[
                {
                    title: '首页',
                    icon: 'home',
                    key: '/home'
                },
                {
                    title: '基本组件',
                    icon: 'laptop',
                    key: '/home/general',
                    subs: [
                        { key: '/home/general/button', title: '按钮', icon: '', },
                        { key: '/home/general/icon', title: '图标', icon: '', },
                    ]
                },
                {
                    title: '导航组件',
                    icon: 'bars',
                    key: '/home/navigation',
                    subs: [
                        { key: '/home/navigation/dropdown', title: '下拉菜单', icon: '' },
                        { key: '/home/navigation/menu', title: '导航菜单', icon: '' },
                    ]
                },
                {
                    title: '输入组件',
                    icon: 'edit',
                    key: '/home/entry',
                   subs:[{
                       key:'/home/entry/form',
                       title:'表单',
                       icon:'',
                       subs: [
                            { key: '/home/entry/form/basic-form', title: '基础表单', icon: '' },
                            { key: '/home/entry/form/step-form', title: '分步表单', icon: '' },
                        ]
                   },{
                       key:'/home/entry/upload',title:'上传',icon:''
                   }]
                }
            ]
        }
    }
   
    render(){
        return(
            <div>
                <MenuList menus={this.state.menus}/>
            </div>
        )
    }
}
export default MenuLeft;