import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Layout.css';
import logo from './Images/logo.png';
import home from './Images/home.png';
import search from './Images/search.png';
import chat from './Images/chat.png';
import profile from './Images/profile.png';
import dots from './Images/more.png';
import Home from './Home';
import Search from './Search';
import Chat from './Chat';
import Profile from './Profile';
import Movie from './Movie';
import { Link } from 'react-router-dom';


export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            page: "Home",
        };
    }
    
    
    render() {
        return (
            <Router>

                <body className="App-header">
                    <div>
                        <img src={logo} className="Logo" />
                        <div className="Conten">
                            <ul className="List">
                                <Link style={{ color: "black", textDecoration: "none" }} to='/'>
                                    <li><img src={home} className="Icon" /><header className="IconT"> Home </header></li>
                                </Link>
                                <Link style={{ color: "black", textDecoration: "none" }} to='/search'>
                                    <li><img src={search} className="Icon" /><header className="IconT"> Search </header></li>
                                </Link>
                                <Link style={{ color: "black", textDecoration: "none" }} to='/chat'>
                                    <li><img src={chat} className="Icon" /><header className="IconT"> Chat </header></li>
                                </Link>
                                <Link style={{ color: "black", textDecoration: "none" }} to='/profile'>
                                    <li><img src={profile} className="Icon" /><header className="IconT"> Profile </header></li>
                                </Link>
                            </ul>
                            <div>
                                <Route path="/" exact component={Home} />
                                <Route path="/search" component={Search} />
                                <Route path="/chat" component={Chat} />
                                <Route path="/profile" component={Profile} />
                                <Route path="/movie" component={Movie} />
                            </div>
                        </div>

                    
                    </div>
                </body>
            </Router>

        );
    };
        

}