import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './stylee.scss';
const Footer = (props) => {



	return (
		<section className="footer">
		    <div className="container">
		        <div className="row media-container-row">
		            <div className="col-md-6">
		                <div className="media-wrap">
		                    <Link to="/">
		                       <img className="fa-spin fa-5x fa-fw" src={logo} alt="Spotify" media-simple="true" />
		                    </Link>
		                </div>
		            </div>
		            <div className="col-md-6 copyright">
		                <p className="mbr-text mbr-fonts-style display-7">
	                        Spotify-Lite{new Date().getFullYear()}  -  By <a className='company' target="_blank" rel="noopener noreferrer" href="https://www.itxi.net/">ITXI ©</a>
	                    </p>
		            </div>
		            
		        </div>
		    </div>
		</section>
		);
}

export default Footer