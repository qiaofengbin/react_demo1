import React, { Component } from 'react'
import {withRouter, Switch, Redirect} from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import AuthRouter from '../AuthRouter'

const Home = LoadableComponent(()=>import('../../routes/Home/index')) //参数一定要是函数，否则不会懒加载，只会代码拆分

// 基本组件
const ButtonDemo = LoadableComponent(()=>import('../../routes/General/ButtonDemo/index'))

// 导航组件
const DropdownDemo = LoadableComponent(()=>import('../../routes/Navigation/DropdownDemo/index'))
const MenuDemo = LoadableComponent(()=>import('../../routes/Navigation/MenuDemo/index'))

//输入组件Demo
const FormDemo1 = LoadableComponent(()=>import('../../routes/Entry/FormDemo/FormDemo1'))
const FormDemo2 = LoadableComponent(()=>import('../../routes/Entry/FormDemo/FormDemo2'))
const UploadDemo = LoadableComponent(()=>import('../../routes/Entry/UploadDemo/index'))

// @withRouter
class ContentMain extends Component{
    render(){
        return(
            <div style={{padding: 16, position: 'relative'}}>
                <Switch>
                    <AuthRouter exact path="/home" component={Home}/>

                    <AuthRouter exact path="/home/general/button" component={ButtonDemo}/>

                    <AuthRouter exact path="/home/navigation/dropdown" component={DropdownDemo}/>
                    <AuthRouter exact path="/home/navigation/menu" component={MenuDemo}/>

                    <AuthRouter exact path='/home/entry/form/basic-form' component={FormDemo1}/>
                    <AuthRouter exact path='/home/entry/form/step-form' component={FormDemo2}/>
                    <AuthRouter exact path='/home/entry/upload' component={UploadDemo}/>

                    <Redirect exact from='/' to='/home'/>
                </Switch>
            </div>
        )
    }
}
export default ContentMain;