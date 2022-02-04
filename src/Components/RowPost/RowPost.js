import React, { useEffect, useState } from 'react';
import './RowPost.css'
import axios from '../../axios'
import { imageUrl, API_KEY, baseUrl } from '../../constants/constants'
import YouTube from 'react-youtube';
function RowPost(props) {
	const [movies, setMovies] = useState([]);
	const [urlId, setUrlId] = useState('')
	useEffect(() => {
		axios.get(props.url).then((response) => {
			setMovies(response.data.results)
		}).catch((error) => {
			console.log('Network error')
		})
	}, []);

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 0,
		},
	};

	const handleTrailer = (id) => {
		axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
			if (response.data.results.length != 0){
				setUrlId(response.data.results[0])
			}
		})
	}
	return <div className='row'>
		<h2>{props.title}</h2>
		<div className='posters'>
			{movies.map((obj, index) =>
				<div className='poster-col'>
					<img onClick={() => {
						handleTrailer(obj.id)
					}}
					key={index} className={props.isSmall ? 'small-poster' : "poster"}
						src={`${imageUrl + obj.backdrop_path}`}
						alt="Poster" />
					<h4>{obj.title}</h4>
				</div>
			)}
		</div>
		{ urlId &&  <YouTube
			opts={opts}
			videoId={urlId.key} />}
	</div>;
}

export default RowPost;
