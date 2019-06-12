import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'

// 验证是否登录
class AuthRouter extends Component {
    render() {  
        const { component: Component, ...rest } = this.props
        const isLogged = sessionStorage.getItem("isLogin") === "1" ? true : false;
      
        return (
            <Route {...rest} render={props => {
              return isLogged
                  ? <Component {...props} />
                  : <Redirect to="/login" />
            }} />
        )
      }
}

export default withRouter(AuthRouter); 