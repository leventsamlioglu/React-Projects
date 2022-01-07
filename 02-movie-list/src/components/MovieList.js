import React from "react";

function MovieList(props) {
  return (
    <div className='row'>
      {props.movies.map((movie) => (
        <div className='col-lg-3' key={movie.id}>
          <div className='card mb-4 shadow-sm'>
            <img
              src={`https://www.themoviedb.org/t/p/w1280/${movie.poster_path}`}
              className='card-img-top'
              alt='sample movie'
            />
            <div className='card-body'>
              <h5 className='card-title'>{movie.title}</h5>
              <p
                className='card-text'
                style={{ height: "120px", overflow: "scroll" }}
              >
                {movie.overview}
              </p>
              <div className='d-flex justify-content-between'>
                <button
                  type='button'
                  onClick={() => props.delete(movie)}
                  className='btn btn-md btn-outline-danger'
                >
                  Delete
                </button>
                <h3>
                  <span className='badge bg-info'>{movie.vote_average}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
