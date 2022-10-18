import React from 'react';
import './stylee.scss';
const Album = (props) => {
	const album = props.data;
	

  return (
    <li className="album artist animated fadeInUp">
    	<div className="album-img artist-img">
    		<img alt={album.name} src={(typeof album.images !== 'undefined' && album.images.length>0)? album.images[0].url : '/assets/images/artist-default.png'} />
      	</div>
      	<div className="album-desc artist-desc">
	      	<h4>{album.name}</h4>
	      	<ul className="artists-albums">
				{
	                    album.artists.map((item, key) => {
	                        return <li key={item.id}>{item.name}</li>
	                    })
	            }
			</ul>
			<div className="album-info">
		      	<p className="followers"> {album.release_date}</p>
		      	<p className="followers"> {album.total_tracks} tracks</p>
				  <a className="album-link" rel="noopener noreferrer" target="_blank" href={album.external_urls.spotify}>Preview on Spotify</a>
	   		</div>
	   	</div>
	   
    </li>
  );
};

export default Album;