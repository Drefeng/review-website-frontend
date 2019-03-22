import React, {Component} from 'react';

import {Button} from 'reactstrap';

class Login extends Component{
    constructor(props, context){
        super(props);
        this.state = {
            username: "",
            password:"",
            role: ""
        }
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name] : value,
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('https://review-website-api.herokuapp.com/user/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((res)=> {
            if(res.status === 200) {
                return res.json();
            }else {
                const error = new Error(res.error);
                throw error;
            }
        })
        .then(data =>{
            localStorage.setItem('token',data.accessToken);
            localStorage.setItem('id', data.id);
            localStorage.setItem('role', data.role);
            this.setState({role: data.role});
            this.props.roleChange(data.role, data.token);
            this.props.history.replace('/');
        })
        .catch(err => {
            console.log(err);
            alert('error logging in please try again');
        });
    }


    render() {
        return (
        <form  method="post">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Username</span>
        </div>
        <input type="text" onChange={this.handleInputChange} name="username"/>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Password  </span>
        </div>
        <input type="password" onChange={this.handleInputChange} name="password"/>
        </div>
        <div>
        <Button type="submit" onClick={this.onSubmit} color="primary">Login</Button>
        </div>
        </form>
        );
    }
  }

export default Login;