import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      isLoading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  // Função feita com ajuda de Gustavo Mauricio e monitoria do Sugando
  async deleteMovie() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  // Função feita com ajuda de Luiza Antiques
  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      isLoading: false,
    });
  }

  // Função feita com ajuda de Gustavo Mauricio
  // async deletehMovie() {
  //   const { match: { params: { id } } } = this.props;
  //   const movie = await movieAPI.deleteMovie(id);
  //   this.setState({
  //     movie,
  //   });
  // }

  render() {
    // Change the condition to check the state
    const { movie, isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        { isLoading && <Loading /> }
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Subtitle: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

// Validação feita com ajuda de Pedro Delicoli
MovieDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
