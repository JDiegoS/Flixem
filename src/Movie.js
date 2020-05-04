import React from 'react';
import './Home.css';
import './Movie.css';
import breaking from './Images/breakingb.png';

function Movie() {
    return (
        <div>
            <div className="ContainerT">
                <h1 className="Title2"> Breaking Bad </h1>
            </div>
                <div style={{ overflowY: "scroll", marginTop: "20px", height: "680px" }}>
                <div className="Containerm">
                    <img src={breaking} className="Imagem" />
                    <h3 className="Descrip"> Title: Breaking Bad </h3>
                    <h3 className="Descrip"> Release Date: 2008 </h3>
                    <h3 className="Descrip"> Cast: Bryan Cranston, Anna Gunn, Aaron Paul</h3>
                    <h3 className="Descrip"> Director: Vince Gilligan, Bryan Cranston, Adam Bernstein </h3>
                    <h3 className="Descrip"> Genres: Crime, Drama, Thriller </h3>
                    <h3 className="Descrip"> Reviews: 2288 </h3>
                    <h3 className="Descrip"> Seasons: 5 </h3>
                    <h3 className="Descrip"> Synopsis: A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future. </h3>
                    <h3 className="Descrip"> Watch on: Netflix, Hulu </h3>
                </div>
            </div>

        </div>
    );
}

export default Movie;