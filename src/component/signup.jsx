import React from 'react';
import {Login} from './login';
import * as EmailValidator from 'email-validator';
// /^[a-zA-Z0-9]+@[a-zA-Z]+\.[A-Za-z]+$/
// const emailRegex = RegExp(/[A-Z0-9._%+-]+@[a-zA-Z.-]+.  [a-z]+.[a-zA-Z]{2,4}/igm);
const nameRegex = RegExp(/^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/);

export class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            password: '',
            email: '',
            formValidate: false,
            isLoggin: false,
            isSignup: false,
            formErrors: {
                fnameError: "",
                lnameError: "",
                emailError: "",
                pswdError: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.handleLoggin = this.handleLoggin.bind(this);
    }

    handleLoggin(props){
        this.setState({isLoggin: props.handleLoggin});
    }

    handleChange(e){
        // this.setState({
        //     [e.target.name]:e.target.value
        // });
        e.preventDefault();

        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
 
        switch(name) {
            case 'fname': 
                formErrors.fnameError = nameRegex.test(value) ? "" : "Number is not allowed";
                break;
            
            case 'lname': 
                formErrors.lnameError = nameRegex.test(value) ? "" : "Number is not allowed";
                break;

            case 'email': 
                formErrors.emailError = EmailValidator.validate(value) ? "" : "Invalid Email Address";
                break;

            case 'password': 
                formErrors.pswdError = value.length < 8 ? "Minimum 8 characters required" : "";
                break;        
        
            default:
                break;
        }

        this.setState({formErrors, [name]: value });
    }

    validate(){
        let fname = this.state.fname;
        let lname = this.state.lname;
        let password = this.state.password;
        let email = this.state.email;
        if(fname!==''&&lname!==''&&password!==''&&email!==''){
            this.setState({formValidate: true,
                isSignup: true});
        }else{
            this.setState({formValidate: false,
            isSignup: false});
        }
    }
    render(){
        console.log(this.state.formValidate);
        console.log("login var from login.jsx", this.props.loggin);
        const {formErrors} = this.state;
        return(
            (!this.state.formValidate && !this.props.loggin)?(
            <div>
                    <div className="formGroup row">
                       <div className="input-label"><label htmlFor="fname">First Name:</label></div>
                        <div className="form-input-div"><input type="text" id="fname" name="fname" className="form-control" onChange={this.handleChange}/></div>
                        {formErrors.fnameError.length > 0 && (
                            <div className="errorMessage">{formErrors.fnameError}</div>
                        )}
                    </div>
                    <div className="formGroup row">
                        <div className="input-label"><label htmlFor="lname">Last Name:</label></div>
                        <div className="form-input-div"><input type="text" id="lname" name="lname" className="form-control" onChange={this.handleChange}/></div>
                        {formErrors.lnameError.length > 0 && (
                            <div className="errorMessage">{formErrors.lnameError}</div>
                        )}
                    </div>
                    <div className="formGroup row">
                        <div className="input-label"><label htmlFor="email">Email:</label></div>
                        <div className="form-input-div"><input type="email" id="email" name="email" className="form-control" onChange={this.handleChange}/></div>
                        {formErrors.emailError.length > 0 && (
                            <div className="errorMessage">{formErrors.emailError}</div>
                        )}
                    </div>
                    <div className="formGroup row">
                        <div className="input-label"><label htmlFor="password">Password: </label></div>
                        <div className="form-input-div"><input type="password" id="password" name="password" className="form-control" onChange={this.handleChange}/></div>
                        {formErrors.emailError.length > 0 && (
                            <div className="errorMessage">{formErrors.pswdError}</div>
                        )}
                    </div>
                    <input type="button" className="btn" value="Signup" onClick={this.validate}/>
                    {/* <IsSignin value={false}/> */}
                    
            </div>
            ):(
                <div>
                    Signup successfull!
                    {/* <Login isSignup={this.state.isSignup}/> */}
                </div>
            )
        );
    }
}