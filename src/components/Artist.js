import React from 'react';
import {Rating} from "react-simple-star-rating";
import { Link } from 'react-router-dom';
import './stylee.scss';
const Artist = (props) => {
	const artist = props.data;
	artist.idd = artist.id + 'rating';
	const popularity = parseInt(artist.popularity/20);

	
	

  return (
    <li className="artist animated fadeInUp">
    <Link to={'/artistinfo/'+artist.id} > 
    	<div className="artist-img">
    		<img alt={artist.name} src={(typeof artist.images !== 'undefined' && artist.images.length>0)? artist.images[0].url : '/img/artist-default.png'} />
      	</div>
      	<div className="artist-desc">
	      	<h3>{artist.name}</h3>
	      	<p className="followers">{artist.followers.total} followers</p>
			<Rating key={artist.idd} popularity={popularity} />
	   	</div>
	</Link>
    </li>
  );
};

export default Artist;