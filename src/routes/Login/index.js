import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios'
import './style.css'
import "antd/dist/antd.css";


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.get('/api/login').then(res => {
                    if ( res.data[0].username=== values.username &&  res.data[0].password === values.password) {
                        sessionStorage.setItem("isLogin", "1");
                        sessionStorage.setItem('userInfo', JSON.stringify(res.data));
                        this.props.history.push('/');
                    } else {
                        alert('请输入正确的用户名和密码');
                        return;
                    }
                }).catch(err=>{
                    alert('登陆失败！！');
                    return;
                })
            } else {
                console.log('err')
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
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
                        <span className="login-form-forgot"> Forgot password </span>
                        <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                        Or <span>register now!</span>
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