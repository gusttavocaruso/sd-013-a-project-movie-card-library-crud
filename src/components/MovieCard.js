import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="movie cover" />
        <div>
          <h4>{ title }</h4>
          <p>{ storyline }</p>
        </div>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};
