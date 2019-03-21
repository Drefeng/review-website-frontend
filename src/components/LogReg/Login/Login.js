import React, {Component} from 'react';


class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password:""
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
            console.log(data);
            localStorage.setItem('token',data.accessToken);
        })
        .catch(err => {
            console.log(err);
            alert('error logging in please try again');
        })
    }

    render() {
        return (
          <form  method="post">
          <div>
              <label>Username:</label>
              <input type="text" onChange={this.handleInputChange} name="username"/>
          </div>
          <div>
              <label>Password:</label>
              <input type="password" onChange={this.handleInputChange} name="password"/>
          </div>
          <div>
              <input type="submit"  onClick={this.onSubmit} value="Log In"/>
          </div>
      </form>
        );
    }
  }

export default Login;