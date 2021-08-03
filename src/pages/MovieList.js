import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => {
      this.setState({
        movies: data,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    const movieCards = (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );

    return (
      <div>
        {loading ? <Loading /> : movieCards}
      </div>
    );
  }
}

export default MovieList;
