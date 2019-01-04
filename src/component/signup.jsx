import React from 'react';

export class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            password: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render(){
        return(
            <div>
                <form>
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
                    <input type="submit" className="btn" value="Signup" onClick={this.validate}/>
                </form>
            </div>
        );
    }
}