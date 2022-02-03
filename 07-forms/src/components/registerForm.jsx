import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
    state = {
        data: {
            username: '',
            password: '',
            name:''
        },
        errors: {}
    };
    schema = {
        username: Joi
            .string()
            .required()
            .email()
            .label("Username"),
        password: Joi
            .string()
            .required()
            .min(5)
            .label("Password"),
        name: Joi
            .string()
            .required()
            .label("name"),
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
                    {this.renderInput('name', 'Name', 'text')}
                    {this.renderButton('Register')}
                </form>
            </div>

        );
    }

}

export default RegisterForm;