import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from '../../axios'
import {API_KEY, imageUrl } from '../../constants/constants'

function Banner() {
	const [movie, setMovie] = useState();
	useEffect(() => {
		axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
			let randomNum = parseInt(Math.random() * (20 - 0) + 0);
			setMovie(response.data.results[randomNum])
		})
	}, [])
	return <div 
	style={{backgroundImage : `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
	className='banner'>
		<div className='content'>
			<h1 className='title'>
				{movie ? movie.title : ''}
			</h1>
			<div className='banner_btns'>
				<button className='banner_btn'>Play</button>
				<button className='banner_btn'>My List</button>
			</div>
			<h1 className='description'>
				{movie ? movie.overview : ''}
			</h1>
		</div>
		<div className="fade_bottom">

		</div>
	</div>;
}

export default Banner;
