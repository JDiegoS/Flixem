import React from 'react';
import './Home.css';
import './Chat.css';


function Chat(){
    return (
        <div>
            <div className="ContainerT">
                <h1 className="Title1"> Chat </h1>
                
            </div>
            <div className="ContainerH">
                <h2 className="Title2"> Topic: Breaking Bad </h2>

            </div>
            
            <div className="Txtb">
                <textarea id="texta" readOnly className="Chatb" style={{ resize: "none" }} value="Message" />
            </div>
            <input id="inp" className="Searchc" placeholder="Type here" />
            <button id="sendb" className="Bttn"> Send </button>

        </div>
       
    );
}


export default Chat;