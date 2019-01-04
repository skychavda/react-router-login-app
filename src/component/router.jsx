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

class Routers extends React.Component{
    constructor(props){
        super(props);
        this.state={isLoggedIn: props.handleLoggin};
    }

    render(){
        const {isLoggedIn} = this.state;
        console.log("router login", this.state.isLoggedIn);
        return(
            <Router>
            <div className="container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    {!isLoggedIn && <li><Link to="/signup">Signup</Link></li>}
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

Routers.defaultProps={
    handleLoggin: false
}

export default Routers;

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

