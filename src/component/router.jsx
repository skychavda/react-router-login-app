import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Home} from './home';
import {Login} from './login';
import {Signup} from './signup';

// export function RouterExample(){
//     return(
//         <Router>
//             <div className="container">
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/login">Login</Link></li>
//                     <li><Link to="/signup">Signup</Link></li>
//                 </ul>
//                 <hr/>
//                 <Route exact path="/" component={home}/>
//                 <Route path="/login"  component={login}/>
//                 <Route path="/signup" component={signup}/>
//             </div>
//         </Router>
//     );
// }

export class Routers extends React.Component{
    constructor(props){
        super(props);
        this.state={isLoggedIn: false};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        this.setState({isLoggedIn: this.props.loggin});
    }
    render(){
        console.log("router login", this.state.isLoggedIn);
        return(
            <Router>
            <div className="container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login" onClick={this.handleChange}>Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={home}/>
                <Route path="/login"  component={login}/>
                <Route path="/signup" component={signup}/>
            </div>
        </Router>
            
        );
    }
}

function home(){
    return(
        <Home />
    );
}

function login(){
    return(
        <Login />
    );
}

function signup(){
    return(
        <Signup />
    );
}

