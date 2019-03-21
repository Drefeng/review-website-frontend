import React, {Component} from 'react';

class Register extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){ 
        event.preventDefault();
        fetch('/user/create', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
          "username": this.username.value,
          "email": this.email.value,
          "password": this.password.value,
          "role": this.role.value,
         })
        });
       };


    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <input ref={(ref) => {this.username = ref}} placeholder="username"> 
            </input>
            <input ref={(ref) => {this.password = ref}} placeholder="email">  
            </input>
            <input ref={(ref) => {this.email = ref}} placeholder="password"> 
            </input>
            <input ref={(ref) => {this.role = ref}} placeholder="role"> 
            </input>
            <button type="Submit">  Register  </button>

        </form>
        );
    }
}

export default Register;