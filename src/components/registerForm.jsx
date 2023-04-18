import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class RegisterForm extends Form {
    state = { 
        data: {
            email: "",
            password: "",
            name: ""
        },
        errors: {}
     };

    schema = {
        email: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name5")
    };

    doSubmit = () => {
        console.log('registered')
    }
    render() { 
        return (
            <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
               {this.renderInput('email', 'Username')}
               {this.renderInput('password', 'Password', 'password')}
               {this.renderInput('name', 'Name')}
              {this.renderButton('Register')}
            </form>
          </div>
        );
    }
}
 
export default RegisterForm;