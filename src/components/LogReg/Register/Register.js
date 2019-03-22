import React, {Component} from 'react';

class Register extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            registred: "",
        }
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
          "active": 1
         })
        })
        .then((res) => {
            console.log(res.status);
            if(res.status === 201){
                this.setState({registred: "Registred completed"})
                window.location.reload();
            }else{
                this.setState({registred: "The username or email is already in use"})
            }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
       };


    render(){
        return(
        <form onSubmit={this.handleSubmit}>
        <div>
              <label>Username:</label>
              <input ref={(ref) => {this.username = ref}} placeholder="username"> 
            </input>
        </div>
        <div>
              <label>Email:</label>
              <input ref={(ref) => {this.email = ref}} placeholder="email">  
            </input>
        </div>
        <div>
              <label>Password:</label>
              <input ref={(ref) => {this.password = ref}} placeholder="password"> 
            </input>
        </div>
        <div>
              <label>Role:</label>
              <input ref={(ref) => {this.role = ref}} placeholder="role"> 
            </input>
        </div>
        <button type="Submit">  Register  </button>
        <p>{this.state.registred}</p>
        </form>
        );
    }
}

export default Register;