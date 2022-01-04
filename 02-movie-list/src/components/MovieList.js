import React from "react";

function MovieList(props) {
  return (
    <div className='row row-cols-3 row-cols-lg-3 g-4'>
      {props.movies.map((movie) => (
        <div className='card lg-4 shadow-sm' key={movie.id}>
          <img
            src={movie.imageURL}
            className='card-img-top'
            alt='sample movie'
          />
          <div className='card-body'>
            <h5 className='card-title'>{movie.name}</h5>
            <p className='card-text'>{movie.overview}</p>
            <div className='d-flex justify-content-between'>
              <button
                type='button'
                onClick={() => props.delete(movie)}
                className='btn btn-md btn-outline-danger'
              >
                Delete
              </button>
              <h3>
                <span className='badge bg-info'>{movie.rating}</span>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
