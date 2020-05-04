import React from 'react';
import './Home.css';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div>
            <div className="ContainerT">
                <h1 className="Title1"> Profile </h1>
            </div>
            <div style={{ overflowY: "scroll", marginTop: "20px", height: "680px" }}>
            <div className="ContainerH">
                <h2 className="Title2"> Preferences </h2>
            </div>
            <div className="Gridp">
                <div className="ContainerP" style={{ display: "inline-flex"}}>
                    <h2 className="Title3"> Genre </h2>
                    <select className="Selectm">
                        <option value="action"> Action </option>
                        <option selected value="comedy"> Comedy </option>
                        <option value="drama"> Drama </option>
                        <option value="horror"> Horror </option>
                    </select>
                </div>
                <div className="ContainerP" style={{ display: "inline-flex" }}>
                    <h2 className="Title3"> Platform </h2>
                    <select className="Selectm">
                        <option selected value="netflix"> Netflix </option>
                        <option value="hulu"> Hulu </option>
                        <option value="disney"> Disney+ </option>
                        <option value="prime"> Prime Video </option>
                    </select>
                </div>
                <div className="ContainerP" style={{ display: "inline-flex" }}>
                    <h2 className="Title3"> Max Movie Length (min)</h2>
                    <input className="Inputu" placeholder="180" />
                </div>
                <div className="ContainerP" style={{ display: "inline-flex" }}>
                    <h2 className="Title3"> Max Seasons (Series) </h2>
                    <input className="Inputu" placeholder="3" />
                </div>
            </div>

            <div className="ContainerH">
                <h2 className="Title2"> User </h2>
            </div>
                
                <div className="ContainerU" style={{ display: "inline-flex" }}>
                <h2 className="Title3"> Nickname </h2>
                <input className="Inputus" placeholder="Diego" />
            </div>
            <div className="ContainerU" style={{ display: "inline-flex" }}>
                <h2 className="Title3"> Username </h2>
                <input className="Inputus" placeholder="JDiego234" />
            </div>
                <div className="ContainerU" style={{ display: "inline-flex" }}>
                    <h2 className="Title3"> E-mail </h2>
                <input className="Inputus" placeholder="sol18151@uvg.edu.gt" />
                </div>
                <div className="ContainerU" style={{ display: "inline-flex" }}>
                    <h2 className="Title3"> Password </h2>
                <input className="Inputus" placeholder="*******" />
            </div>

            <Link style={{ color: "black", textDecoration: "none" }} to='/in/profile'>
                <div className="ContainerH">
                    <h2 className="Title2"> Apply Changes </h2>
                </div>
            </Link>

            <Link style={{ color: "black", textDecoration: "none" }} to='/'>
                <div className="ContainerH">
                    <h2 className="Title2"> Sign Out </h2>
                </div>
            </Link>
            </div>

        </div>
    );
}

export default Profile;