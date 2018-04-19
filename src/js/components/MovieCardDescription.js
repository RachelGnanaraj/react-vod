import React from 'react';

export default class MovieCardDescription extends React.Component {
  getDescription = (p = this.props) => {
    if (p.expanded || p.description.length < 100) return p.description
    else {
      if (p.description.length > 100) {
        return p.description.slice(0, 100) + '...'
      }
    }
  }

  render() {
    return (
        <p className="card-text movie-description">{this.getDescription()}</p>
    )
  }
}
