import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      initialState: 0,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    this.setState({
      movies: await movieAPI.getMovies(),
      initialState: 1,
    });
  }

  render() {
    const { movies, initialState } = this.state;
    if (initialState === 0) {
      return <Loading />;
    }
    return (
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
