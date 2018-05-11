import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import './Login.css';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const form = e.target;
      const element1 = document.createElement("input");
      const element2 = document.createElement("input");

      form.method = "POST";
      form.action = "/login";

      element1.value=values.username;
      element1.name="username";
      form.appendChild(element1);

      element2.value=values.password;
      element2.name="password";
      form.appendChild(element2);
      form.style.display="none";
      document.body.appendChild(form);

      form.submit();
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const errorIndex = document.location.search.indexOf('error=true');
    return (
      <div>
        { errorIndex >= 0 && <Alert
                  className="login-error-alert"
                  message="Error"
                  description="Incorrect username or password."
                  type="error"
                  showIcon
                /> }
        <Form onSubmit={this.handleSubmit} className="login-form" >
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
             {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
             })(
              <Checkbox>Remember me</Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>

    );
  }
}

const Login = Form.create()(NormalLoginForm);

export default Login;
