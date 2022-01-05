import React from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import axios from "axios";
class App extends React.Component {
  state = {
    movies: [],
    searchText: "",
  };

  // FETCH API
  // async componentDidMount() {
  //   const basURL = "http://localhost:3001/movies";
  //   const response = await fetch(basURL);
  //   const data = await response.json();
  //   this.setState({ movies: data });
  // }

  // deleteMovie = async (movie) => {
  //   const basURL = `http://localhost:3001/movies/${movie.id}`;
  //   await fetch(basURL, { method: "DELETE" });
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

  //   this.setState((state) => ({ movies: newMovieList }));
  // };

  // AXIOS API
  async componentDidMount() {
    const basURL = "http://localhost:3001/movies";
    const response = await axios.get(basURL);
    this.setState({ movies: response.data });
  }

  deleteMovie = async (movie) => {
    const basURL = `http://localhost:3001/movies/${movie.id}`;
    await axios.delete(basURL);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({ movies: newMovieList }));
  };

  searchMovie = (event) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchText.toLowerCase()) !== -1
      );
    });
    return (
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-lg-12'>
            <SearchBar search={this.searchMovie} />
          </div>
        </div>
        <MovieList movies={filteredMovies} delete={this.deleteMovie} />
      </div>
    );
  }
}
export default App;
