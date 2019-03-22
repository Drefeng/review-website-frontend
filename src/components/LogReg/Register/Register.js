import React, {Component} from 'react';
import {Button} from 'reactstrap';

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
        fetch('https://review-website-api.herokuapp.com/user/create', {
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

            <form  onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Username</span>
          </div>
          <input ref={(ref) => {this.username = ref}} placeholder="username"> 
        </input>
          </div>

          <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Password  </span>
          </div>
          <input type="password" ref={(ref) => {this.password = ref}} placeholder="password"/>
          </div>
          <div>
          <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Email</span>
          </div>
          <input ref={(ref) => {this.email = ref}} placeholder="email">  
        </input>
          </div>
          <div className="form-group">
            <label for="sel1">Role</label>
            <select className="form-control" id="sel1" ref={(ref) => {this.role = ref}}>
                <option value="1">Reviewer</option>
                <option value="2">Owner</option>
            </select>
        </div>
                  
          <Button type="submit" color="primary">Login</Button>
          </div>
          </form>













        );
    }
}

export default Register;