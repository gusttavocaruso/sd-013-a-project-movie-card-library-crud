import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie,
    });
  }

  buildCard = (movie) => {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
      <img alt="Movie Cover" src={ `../${imagePath}` } />
      <p>{`Title: ${title}`}</p>
      <p>{ `Subtitle: ${subtitle}` }</p>
      <p>{ `Storyline: ${storyline}` }</p>
      <p>{ `Genre: ${genre}` }</p>
      <p>{ `Rating: ${rating}` }</p>
      <Link to="/">VOLTAR</Link>
      <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
    </div>
    )
  }

  render() {
    const { loading, movie } = this.state;
    return (
      loading ? <Loading /> : this.buildCard(movie)
    )
  }
}

export default MovieDetails;
