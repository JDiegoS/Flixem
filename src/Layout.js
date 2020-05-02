import React from 'react';
import './Layout.css';
import logo from './logo.png';
import home from './home.png';
import search from './search.png';
import chat from './chat.png';
import profile from './profile.png';
import dots from './more.png';


export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Hello World",
        };
    }
    
    
    render() {
        return (
            <body className="App-header">
                <div>
                    <img src={logo} className="Logo" />
                    <div className="Conten">
                        <ul className="List">
                            <li><img src={home} /></li>
                            <li><img src={search} /></li>
                            <li><img src={profile} /></li>
                        </ul>
                        <h1> sfg </h1>
                    </div>

                    
                </div>
            </body>

        );
    };

}