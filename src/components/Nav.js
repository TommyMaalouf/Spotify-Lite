import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Authentication from './Authentication';
import './stylee.scss';



class Nav extends Component {

	logoutEvent() {
		if(Authentication.isLoggedIn())
		{
			Authentication.logout();
			window.location.href="/";
		}
			
		
	}
	
    render(){
    		return (
				<nav className="navbar navbar-default">
					<div className="navbar-header">
						<ul className="nav navbar-nav">
							<li><Link  to="/" onClick={() => this.logoutEvent()}>{Authentication.isLoggedIn()? <span className='loginbro'>Logout</span>  : <span >Search your favourite artists with Spotify Lite!</span> }</Link></li>
						</ul>
					</div>
				</nav>
				
			);
    	}
	
}

export default Nav