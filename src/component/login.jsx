import React from 'react';
import {Signup} from './signup';
import {Routers} from './router';

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
            isLoggedIn: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
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
        return(
        (!this.state.authValidate)?(
                <div>
                    <div className="formGroup row">
                        <div className="input-label"><label htmlFor="email">Email:</label></div>
                        <div className="form-input-div"><input type="email" id="email" name="email" className="form-control" onChange={this.handleChange}/></div>
                    </div>
                    <div className="formGroup row">
                        <div className="input-label"><label htmlFor="password">Password: </label></div>
                        <div className="form-input-div"><input type="password" id="password" name="password" className="form-control" onChange={this.handleChange}/></div>
                    </div>
                    <input type="button" className="btn" value="Login" onClick={this.validate}/>
                    
                </div>
            ):(
                <div>
                    <div>sfdsfdsfdsf</div>
                    <button onClick={this.logout}>Logout</button>
                    <Routers loggin={this.state.isLoggedIn}/>
                </div>
                
            ));
        }
    }
