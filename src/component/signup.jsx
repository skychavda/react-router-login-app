import React from 'react';
import {Login} from './login';

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
            isSignup: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.handleLoggin = this.handleLoggin.bind(this);
    }

    handleLoggin(props){
        this.setState({isLoggin: props.handleLoggin});
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
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
        return(
            (!this.state.formValidate && !this.props.loggin)?(
            <div>
                    <div className="formGroup row">
                       <div className="input-label"><label htmlFor="fname">First Name:</label></div>
                        <div className="form-input-div"><input type="text" id="fname" name="fname" className="form-control" onChange={this.handleChange}/></div>
                    </div>
                    <div className="formGroup row">
                        <div className="input-label"><label htmlFor="lname">Last Name:</label></div>
                        <div className="form-input-div"><input type="text" id="lname" name="lname" className="form-control" onChange={this.handleChange}/></div>
                    </div>
                    <div className="formGroup row">
                        <div className="input-label"><label htmlFor="email">Email:</label></div>
                        <div className="form-input-div"><input type="email" id="email" name="email" className="form-control" onChange={this.handleChange}/></div>
                    </div>
                    <div className="formGroup row">
                        <div className="input-label"><label htmlFor="password">Password: </label></div>
                        <div className="form-input-div"><input type="password" id="password" name="password" className="form-control" onChange={this.handleChange}/></div>
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