import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

import MovieCard from './MovieCard';

import './SimpleSlider.scss'

export default class SimpleSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			sliderIndex: 0,
			settings: {
				accessibility: true,
				dots: false,
				focusOnSelect: false,
				infinite: true,
				slideCount: this.props.videoData.length,
				slidesToShow: 5,
				slidesToScroll: 1,
				afterChange: this.handleSliderChange
			}
		};
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown, true);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	handleSliderChange = sliderIndex => {
		this.setState({ sliderIndex })
	}

	handleKeyDown = e => {
		const { sliderIndex } = this.state
		if (e.keyCode == '37') {
			this.sliderPrev()
		}
		else if (e.keyCode == '38') {
			this.slider.slickGoTo(sliderIndex - 5, false)
			this.setState({
				sliderIndex: sliderIndex - 5 
			})
		}
		else if (e.keyCode == '39') {
			this.sliderNext()
		}
		else if (e.keyCode == '40') {
			this.slider.slickGoTo(sliderIndex + 5, false)
			this.setState({
				sliderIndex: sliderIndex + 5 
			})
		}
	}

	sliderNext() {
		this.slider.slickNext();
	}

	sliderPrev() {
		this.slider.slickPrev();
	}

	render() {
		let videos = this.props.videoData;
		let sliderIndex = this.state.sliderIndex;
		if (!videos || videos.length === 0) {
			return <div>Loading videos ...</div>;
		}

		let slides = videos.map((video, index) => {
			return (
				<div key={index}>
					<MovieCard id={video.id} url={video.url} title={video.title} description={video.description}/>
				</div>
			);
		});
		
		return (
			<div className='simple-slider'>
				<Slider ref={c => (this.slider = c)} {...this.state.settings}>
					{slides}
				</Slider>
			</div>
		);
	}
}
