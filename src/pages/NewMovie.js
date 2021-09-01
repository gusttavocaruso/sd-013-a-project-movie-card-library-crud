import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => console.log(response.length));
  }

  handleSubmit(newMovie) {
    console.log(newMovie);
  }

  render() {
    return (
      <div data-testid="new-movie">
        <p>NewMovie</p>
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
