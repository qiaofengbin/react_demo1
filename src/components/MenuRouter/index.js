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

@withRouter
class MenuRouter extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <AuthRouter exact path="/home" component={Home}/>

                    <AuthRouter exact path="/home/general/button" component={ButtonDemo}/>

                    <AuthRouter exact path="/home/navigation/dropdown" component={DropdownDemo}/>
                    <AuthRouter exact path="/home/navigation/menu" component={MenuDemo}/>

                    <Redirect exact from='/' to='/home'/>
                </Switch>
            </div>
        )
    }
}
export default MenuRouter;