import React from 'react';
import './Home.css';
import './Profile.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <div className="ContainerT">
                <h1 className="Title1"> Log In </h1>
            </div>
            
            <div className="ContainerU" style={{ display: "inline-flex" }}>
                <h2 className="Title3"> Username </h2>
                <input className="Inputus" placeholder="Type here" />
            </div>
            <div className="ContainerU" style={{ display: "inline-flex" }}>
                <h2 className="Title3"> Password </h2>
                <input className="Inputus" placeholder="Type here" />
            </div>
           

            <Link style={{ color: "black", textDecoration: "none", marginBottom: "100px" }} to='/in/home'>
                <div className="ContainerH" style={{ marginBottom: "100px" }}>
                    <h2 className="Title2"> Submit </h2>
                </div>
            </Link>

        </div>
    );
}

export default Login;