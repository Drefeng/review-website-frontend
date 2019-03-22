import React, { Component } from "react";
import Tabs from "../../Tabs/Tabs";

class OwnerDash extends Component{

    render(){
        return(
            <Tabs>
                <div label ='List your restaurants' />
                
                <div label ='Create new restaurant' />

                <div label ='Update user info' />
            </Tabs>
        );
    }
}

export default OwnerDash;