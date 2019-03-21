import React, { Component } from "react";

class Logout extends React.Component{
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
    }
}

export default Logout;