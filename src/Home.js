import React from 'react';
import './Home.css';
import breaking from './Images/breakingb.png';
import chapo from './Images/chapo.jpg';
import narcos from './Images/Narcos.jpg';
import peaky from './Images/Peaky.jpg';
import sicario from './Images/sicariot.jpg';
import reina from './Images/Reina.jpg';
import more from './Images/more.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>

            <div className="ContainerT">
                <h1 className="Title1"> Recommendations </h1>
            </div>
            <div style={{ overflowY: "scroll", marginTop: "20px"}}>
            <div className="ContainerH">
                <h2 className="Title2"> Based on genre </h2>
            </div>
            <div className="Grids">
                
                <div className="Containers">
                    <img src={narcos} className="Images" />
                    <h3 className="Descrip"> Title: Narcos </h3>
                    <h3 className="Descrip"> Release Date: 2017 </h3>
                    <h3 className="Descrip"> Cast: Pedro Pascal, Wagner Moura, Boyd Holbrook </h3>
                    <h3 className="Descrip"> Synopsis: A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years. </h3>
                    <Link style={{ color: "black", textDecoration: "none" }} to='/in/movie'>
                        <img src={more} className="More" />
                    </Link>
                </div>
                <div className="Containers">
                    <img src={chapo} className="Images" />
                    <h3 className="Descrip"> Title: El Chapo</h3>
                    <h3 className="Descrip"> Release Date: 2017 </h3>
                    <h3 className="Descrip"> Cast: Marco de la O, Humberto Busto</h3>
                    <h3 className="Descrip"> Synopsis: A look at the life of notorious drug kingpin, El Chapo, from his early days in the 1980s working for the Guadalajara Cartel, to his rise to power of during the '90s and his ultimate downfall in 2016. </h3>
                    <Link style={{ color: "black", textDecoration: "none" }} to='/in/movie'>
                        <img src={more} className="More" />
                    </Link>
                </div>
                <div className="Containers">
                    <img src={peaky} className="Images" />
                    <h3 className="Descrip"> Title: Peaky Blinders </h3>
                    <h3 className="Descrip"> Release Date: 2014 </h3>
                    <h3 className="Descrip"> Cast: Cillian Murphy, Paul Anderson, Helen McCroy</h3>
                    <h3 className="Descrip"> Synopsis: A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby. </h3>
                    <Link style={{ color: "black", textDecoration: "none" }} to='/in/movie'>
                        <img src={more} className="More" />
                    </Link>
                </div>
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
                <div className="Containers">
                    <img src={sicario} className="Images" />
                    <h3 className="Descrip"> Title: Sicario </h3>
                    <h3 className="Descrip"> Release Date: 2015 </h3>
                    <h3 className="Descrip"> Cast: Emily Blunt, Josh Brolin, Benicio del Toro </h3>
                    <h3 className="Descrip"> Synopsis: An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico. </h3>
                    <Link style={{ color: "black", textDecoration: "none" }} to='/in/movie'>
                        <img src={more} className="More" />
                    </Link>
                </div>
                <div className="Containers">
                    <img src={reina} className="Images" />
                    <h3 className="Descrip"> Title: Reina del Sur</h3>
                    <h3 className="Descrip"> Release Date: 2011 </h3>
                    <h3 className="Descrip"> Cast: Kate del Castillo, Humberto Zurita, Alejandro Calva </h3>
                    <h3 className="Descrip"> Synopsis: Teresa Mendoza returns to Mexico after 8 years to fight with Mexican drug dealers. </h3>
                    <Link style={{ color: "black", textDecoration: "none" }} to='/in/movie'>
                        <img src={more} className="More" />
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Home;