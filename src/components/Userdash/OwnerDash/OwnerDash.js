import React, { Component } from "react";
import Tabs from "../../Tabs/Tabs";
import Update from "../Update";

class OwnerDash extends Component{

    render(){
        return(
            <Tabs>
                <div label ='List your restaurants' />
                
                <div label ='Create new restaurant' />

                <div label ='Create new restaurant' />

                <div label ='Update user info'>
                    <Update />
                </div>

            </Tabs>
        );
    }
}

export default OwnerDash;