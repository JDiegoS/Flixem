import React from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import './Layout.css';
import logo from './Images/logo.png';
import home from './Images/home.png';
import search from './Images/search.png';
import chat from './Images/chat.png';
import profile from './Images/profile.png';
import dots from './Images/more.png';
import Home from './Home';
import Login from './Login';
import Search from './Search';
import Chat from './Chat';
import Profile from './Profile';
import Movie from './Movie';
import Menu from './Menu';
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
                        

                        <div>

                            <Route path="/in/" component={Menu} />
                            <div style={{ marginLeft: "300px" }}>

                                <Route path="/" exact component={Login} />
                                
                                <Route path="/in/home"  component={Home} />
                                <Route path="/in/search" component={Search} />
                                <Route path="/in/chat" component={Chat} />
                                <Route path="/in/profile" component={Profile} />
                                <Route path="/in/movie" component={Movie} />
                            </div>
                        </div>

                    
                    </div>
                </body>
            </Router>

        );
    };
        

}