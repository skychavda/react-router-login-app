import React from 'react';
import {Signup} from './signup';
import Routers from './router';

const emailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[A-Za-z]+$/);

export function IsSignin(props){
        if(props.value){
            return <h1>hii</h1>;
        }   
    
}
export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: '',
            authValidate: false,
            isLoggedIn: false,
            formErrors: {
                emailError: "",
                pswdError: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleChange(e){
        // this.setState({[e.target.name]:e.target.value});
        e.preventDefault();

        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
 
        switch(name) {
            case 'email': 
                formErrors.emailError = emailRegex.test(value) ? "" : "Invalid Email Address";
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
        const email = this.state.email;
        const password = this.state.password;
        if(email !== '' && password !== ''){
            this.setState({authValidate: true,
            isLoggedIn: true
            });
            // Signup.handleLoggin();
        }
        // else{
        //     this.setState({authValidate: false,
        //     isLoggedIn: false});
        // }
    }

    logout(){
        this.setState({authValidate: false,isLoggedIn:false});
    }

    render(){
            console.log("authValidate", this.state.authValidate);
            console.log("login",this.state.isLoggedIn);
            const {formErrors} = this.state;
        return(
        (!this.state.authValidate)?(
                <div>
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
                        {formErrors.pswdError.length > 0 && (
                            <div className="errorMessage">{formErrors.pswdError}</div>
                        )}
                    </div>
                    <input type="button" className="btn" value="Login" onClick={this.validate}/>
                    
                </div>
            ):(
                <div>
                    <div>sfdsfdsfdsf</div>
                    <button onClick={this.logout}>Logout</button>
                    {/* <Routers handleLoggin={this.state.isLoggedIn}/> */}
                </div>
            ));
        }
    }
