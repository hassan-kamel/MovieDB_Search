import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allMovies } from '../store/slices/movie';
import MovieItem from './MovieItem';

const MovieList = () => {
  const movies = useSelector((state) => state.movie.all);
  //   const movies = false;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allMovies());
  }, [dispatch]);

  return (
    <>
      <div className='mb-60 container mx-auto max-w-screen-lg'>
        <div className='mt-20 flex justify-center items-center flex-wrap gap-2'>
          {movies ? (
            movies.results &&
            movies.results.map((movie) => {
              return <MovieItem key={movie.id} movie={movie} />;
            })
          ) : (
            <div className='fixed inset-0 top-[10vh] w-screen h-screen flex justify-center items-center backdrop-blur-sm'>
              <div class=' animate-spin inline-block w-12 h-12 border-t-red-600 border-4 rounded-full'></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieList;
