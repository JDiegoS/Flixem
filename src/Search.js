import React from 'react';
import './Home.css';
import search from './Images/search.png';
import breaking from './Images/breakingb.png';
import more from './Images/more.png';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Search(){
    return (
        <div>
            
            <div className="ContainerT">
                <h1 className="Title1"> Search </h1>
            </div>
            <div style={{ paddingLeft: "100px" }}>
                <input className="SearchI" placeholder="Search movies, series, artist..." />
                <Link style={{ color: "black", textDecoration: "none" }} to='/in/search/result'>
                    <img src={search} style={{ verticalAlign: "middle", height: "45px", paddingBottom: "10px" }} />
                </Link>
            </div>

            <div style={{ overflowY: "scroll", marginTop: "20px", height: "610px" }}>
                <Route path="/in/search/result" component={Result} />
            </div>

        </div>
    );
}

function Result() {
    return (
        <div>
            <div className="Containers">
                <img src={breaking} className="Images" />
                <h3 className="Descrip"> Title: Breaking Bad </h3>
                <h3 className="Descrip"> Release Date: 2008 </h3>
                <h3 className="Descrip"> Cast: Bryan Cranston, Anna Gunn, Aaron Paul</h3>
                <h3 className="Descrip"> Synopsis: A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future. </h3>
                <Link style={{ color: "black", textDecoration: "none" }} to='/in/movie'>
                    <img src={more} className="More" />
                </Link>
            </div>
        </div>
        )
}

export default Search;