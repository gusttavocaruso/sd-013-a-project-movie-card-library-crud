import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } />
        <h1>{ movie.title }</h1>
        <p>{ movie.storyline }</p>
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
