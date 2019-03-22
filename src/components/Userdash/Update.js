import React, {Component} from 'react';

class Update extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            updated: "",
            role: "",
        }
    }    
    componentDidMount(){
        this.setState({role : JSON.parse(localStorage.getItem('role'))})
    }

    handleSubmit(event){ 
    event.preventDefault();
    fetch('https://review-website-api.herokuapp.com/user/update', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
      "username": this.username.value,
      "email": this.email.value,
      "password": this.password.value,
      "role": this.role.value,
      "user_id": JSON.parse(localStorage.getItem('id'))
     })
    })
    .then((res) => {
        console.log(res.status);
        if(res.status === 201){
            this.setState({updated: "Update completed, please log in again"})
            window.location.reload();
        }else{
            this.setState({updated: "The username or email is already in use"})
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
    <button type="Submit">  Update  </button>
    <p>{this.state.updated}</p>
    </form>
    );
}
}
export default Update;