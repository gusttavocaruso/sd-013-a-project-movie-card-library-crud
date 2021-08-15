import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <div>{title}</div>
        <div>{storyline}</div>
        <div><Link to={ `/movies/${id}` }>VER DETALHES</Link></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieCard;
