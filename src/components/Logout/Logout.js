import React, { Component } from "react";

class Logout extends Component{

    render(){
        if(localStorage.length === 0){
            return (
                <div>
                    <p>You are not logged in</p>
                </div>
            )
        }
        else{
        return(
        <div>
            <button onClick={this.logout()}>LOGOUT</button>
        </div>
            );
        }
    }

    logout(){
        localStorage.clear();
        this.props.history.push('/stuff');
        window.location.reload();
    }
}

export default Logout;