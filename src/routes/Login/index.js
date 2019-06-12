import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Divider } from 'antd';

import './style.css'
import "antd/dist/antd.css";


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    handleSubmit (e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              if(values.username=='admin'&&values.password=='123'){
                  const userInfo = {
                      username:values.username,
                      password:values.password
                  }
                sessionStorage.setItem("isLogin","1");
                sessionStorage.setItem('userInfo',JSON.stringify(userInfo));
                this.props.history.push('/');
              } else {
                  alert('请输入正确的用户名和密码');
                  return;
              }
            
          } else{
              console.log('err')
          }
        });
      };
    render() {
        const { getFieldDecorator } = this.props.form;
        console.log(this.props);
        return (
           <div id="components-form-demo-normal-login">
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href=""> Forgot password </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                    Or <a href="">register now!</a>
                    <div>
                        <span>用户名：admin</span>&nbsp;&nbsp;
                        <span>密码：123</span>
                    </div>
                </Form.Item>
            </Form>
           </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;