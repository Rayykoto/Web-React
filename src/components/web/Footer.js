//import react
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function WebFooter() {

    return(
        <React.Fragment>
            <footer>
                <div className="footer_top">
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="container mb-5"> 
                    <div className="row justify-content-center">
                        <p className="koto">
                            @2022 KOTO
                        </p>
                        <div className="koto2">
                            <a href="/places" rel="noopener" className="koto3"> Places</a>
                            <span className="koto4"> . </span>
                            <a href="/places" rel="noopener" className="koto3"> Maps</a>
                        </div>
                        <p className="koto">
                            Made With ♥ For Indonesia
                        </p>
                    </div>  
                </div>
            </footer>
        </React.Fragment>
    )
}

export default WebFooter;