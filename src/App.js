import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Authentication from './components/Authentication';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';
//import Mobile from './components/Mobile';


import Header from './components/Header';
import Footer from './components/footer';
//import Error from './error';
import Login from './components/Login';
import Search from './components/Search';
import Artistinfo from './components/artistinfo';
import Album from './components/Album';


class App extends Component {

	state = {
        isLoggedIn: Authentication.isLoggedIn() 
    };

    componentDidMount() {
    	//console.log('mounted');
        const token = Authentication.getAccessTokenFromRedirect();
        if (token) {
            this.setAccessToken(token);
        }
    }

    setAccessToken(token) {
        Authentication.setAccessToken(token);
        this.setState({
            isLoggedIn: true
        });
    }

    logout = () => {
        Authentication.logout();
        this.setState({
            isLoggedIn: false
        });
    };

	
	  
	

	render() {
		
		return (
			<MediaQuery minDeviceWidth={10}>
			<div className="maindiv">				
				<div className="container page-content">
				<Header loggedIn={this.state.isLoggedIn} />
					<div className="row">
						<div className="yoo">
							 {this.props.children}
							<Switch>
					            <Route exact path="/" render={props => (
	                                this.state.isLoggedIn ?
	                                    <div className="search-container">
	                                        <Search />
	                                    </div>
	                                    :
	                                    <Login/>
	                            )}/>

					            <Route exact path="/search" render={props => (
                                this.state.isLoggedIn ? <Search /> : <div>Access Denied</div>
	                            )}/>

	                            <Route exact path="/artistInfo/:id/" render={(props) =>  (
	                                this.state.isLoggedIn ? <Artistinfo /> : <div>Access Denied</div>
	                            )}/>

	                            <Route exact path="/artist/:id/albums" render={props => (
	                                this.state.isLoggedIn ? <Album/> : <div>Access Denied</div>
	                            )}/>

					            <Route component={Error} />
					        </Switch>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
			</MediaQuery>

			)
	}
}


export default App;