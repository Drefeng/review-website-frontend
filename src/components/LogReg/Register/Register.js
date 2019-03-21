import React, {Component} from 'react';
import { render } from "react-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class Register extends React.Component{
    render(){
        return(
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">Sign up</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                            Your name
                        </label>
                        <input
                            type="text"
                            id="defaultFormRegisterNameEx"
                            className="form-control"
                        />
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="defaultFormRegisterEmailEx"
                            className="form-control"
                        />
                        <br />
                        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                            Confirm your email
                        </label>
                        <input
                            type="email"
                            id="defaultFormRegisterConfirmEx"
                            className="form-control"
                        />
                        <br />
                        <label
                            htmlFor="defaultFormRegisterPasswordEx"
                            className="grey-text"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            id="defaultFormRegisterPasswordEx"
                            className="form-control"
                        />
                        <div className="md-form pb-3">
                        <div className="form-check my-4">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck17"
                        />
                        <label
                            className="form-check-label white-text"
                            htmlFor="defaultCheck17"
                        >
                            Check if registering as restaurant owner
                        </label>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <MDBBtn color="unique" type="submit">
                        Register
                    </MDBBtn>
                </div>
            </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        );
    }
}

export default Register;