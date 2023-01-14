import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allMovies, moviesPage } from '../store/slices/movie';
import MovieItem from './MovieItem';
import ReactPaginate from 'react-paginate';

const MovieList = () => {
  const movies = useSelector((state) => state.movie.all);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allMovies());
  }, [dispatch]);

  return (
    <>
      <div className=' mb-60 container mx-auto max-w-screen-lg'>
        <div className='mt-20 flex justify-center items-center flex-wrap gap-2'>
          {movies ? (
            movies.results &&
            movies.results.map((movie) => {
              return <MovieItem key={movie.id} movie={movie} />;
            })
          ) : (
            <div className='fixed inset-0 top-[10vh] w-screen h-screen flex justify-center items-center backdrop-blur-sm'>
              <div className=' animate-spin inline-block w-12 h-12 border-t-red-600 border-4 rounded-full '></div>
            </div>
          )}
        </div>
        <ReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={(e) => {
            console.log('e.selected: ', e.selected);
            dispatch(moviesPage(e.selected + 1));
          }}
          pageRangeDisplayed={5}
          pageCount={movies && movies.total_pages / 100}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
          className='flex items-center justify-center gap-1 text-xs font-mediums my-5'
          pageLinkClassName='inline-flex mx-1 py-1 px-2 items-center justify-center rounded border border-gray-100 backdrop-blur-lg backdrop-brightness-75'
          activeLinkClassName='inline-flex mx-1 py-1 px-2 rounded  bg-red-600 text-center  text-white'
          previousLinkClassName='inline-flex mx-1 py-1 px-2 items-center justify-center rounded border border-gray-100 backdrop-blur-lg backdrop-brightness-75'
          nextLinkClassName='inline-flex mx-1 py-1 px-2 items-center justify-center rounded border border-gray-100 backdrop-blur-lg backdrop-brightness-75'
          disabledLinkClassName='inline-flex mx-1 py-1 px-2 items-center justify-center rounded border border-gray-100 backdrop-blur-lg backdrop-brightness-75 cursor-not-allowed'
        />
      </div>
    </>
  );
};

export default MovieList;
