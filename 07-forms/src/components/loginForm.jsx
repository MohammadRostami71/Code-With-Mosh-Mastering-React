import React, {Component} from "react";
import Input from "./common/input";
import Joi from 'joi-browser';
import Form from "./common/form";

class LoginForm extends Form {
    username = React.createRef();

    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}
    }

    // componentDidMount() {
    //     this.username.current.focus();
    // }

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };


    doSubmit = () => {
        //call the server
        alert('Submitted')
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handelSubmit}>
                    {this.renderInput('username', 'Username', 'text')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </div>

        );
    }
}

export default LoginForm