
import React from 'react';
import { Link } from 'react-router-dom';

import './stylee.scss';
import Nav from './Nav'

const Header = (props) => {



	return (
		<header className='header' >
			<div className="container">
			    <div className="logo"><Link to="/"><img alt="Spotify" src="./img/spotify-logo-green.png" /></Link></div>
				<Nav className="loginbro"  loggedIn={props.loggedIn} />
			</div>
		</header>
		);
}

export default Header