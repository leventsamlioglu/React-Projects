import React from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import axios from "axios";
require("dotenv").config();
class App extends React.Component {
  API = {
    key: process.env.REACT_APP_API_KEY,
    session: process.env.REACT_APP_SESSION_ID,
    list: process.env.REACT_APP_LIST,
  };

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
    // const basURL = `https://api.themoviedb.org/3/movie/popular?api_key=${this.API.key}&language=en-US&page=1`;

    const baseURL = `https://api.themoviedb.org/3/list/${this.API.list}?api_key=${this.API.key}&language=en-US`;
    const response = await axios.get(baseURL);
    this.setState({ movies: response.data.items });
  }

  deleteMovie = async (movie) => {
    const baseURL = `https://api.themoviedb.org/3/list/${this.API.list}/remove_item?media_id=${movie.id}&session_id=${this.API.session}&api_key=${this.API.key}`;
    await axios.post(baseURL);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({ movies: newMovieList }));
  };

  searchMovie = (event) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchText.toLowerCase()) !== -1
      );
    });
    return (
      <div className='container mt-2'>
        <div className='row' style={{ height: "50px" }}>
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
