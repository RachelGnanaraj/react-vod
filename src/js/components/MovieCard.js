import React from 'react';

import MovieCardDescription from './MovieCardDescription'

import './MovieCard.scss'

export default class MovieCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      playing: false,
    };
  }

  onMouseOver = () => {
    this.setState({hover: true}, () => {
      this.getVideo().play()
    })
  }

  onMouseLeave = () => {
    this.setState({hover: false}, () => {
      this.getVideo().pause()
    })
  }

  getVideo = () => this.video

  getClassName = () => {
    if (this.state.hover) return 'thumbnail movie-card movie-card--hover'

    return 'thumbnail movie-card movie-card--not-hover'
  }

  render() {
    const { id, url, title, description } = this.props
    const { hover } = this.state
    return (
      <div
        className={this.getClassName()}
        key={id.toString()}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}>
        <video ref={v => (this.video = v)}>
          <source src={url} type="video/mp4" />
        </video>
        <div className="caption">
          <h5>{title}</h5>
          <MovieCardDescription description={description} expanded={hover}/>
        </div>
      </div>
    )
  }
}
