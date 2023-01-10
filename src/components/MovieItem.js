import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieGenre } from '../store/slices/movie';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const genres = useSelector((state) => state.movie.genres);
  const dispatch = useDispatch();
  const numberFormatter = Intl.NumberFormat('en', { notation: 'compact' });
  const dateFormatter = Intl.DateTimeFormat('en', { dateStyle: 'medium' });
  useEffect(() => {
    dispatch(movieGenre());
  }, [dispatch]);
  return (
    <div className='group w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 transform transition-all duration-200 hover:scale-125 hover:z-10  rounded-md shadow-md relative cursor-pointer'>
      <Link to={`/movies/${movie.id}`}>
        <div className='w-full '>
          <img
            className='w-full  rounded-md'
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=''
          />
        </div>
        <div className=' w-full absolute top-2/3 transform scale-y-0 origin-top group-hover:scale-y-100 transition-all delay-200 duration-200 backdrop-brightness-[40%] backdrop-blur-lg rounded-b-md'>
          <div className='px-2 py-3 flex flex-col gap-1 min-h-full '>
            <div className='flex justify-start items-center flex-wrap gap-[2px]'>
              {movie.genre_ids.map((id) => {
                let name;
                genres &&
                  genres.forEach((gen) => {
                    if (gen.id === id) name = gen.name;
                  });
                return (
                  <span
                    key={id}
                    className='text-red-500 text-[10px] font-bold font-["Teko"] '>
                    {name}
                  </span>
                );
              })}
            </div>
            <div>
              <h4 className='capitalize text-md'>{movie.title}</h4>
            </div>
            <div className='text-xs mt-auto flex justify-between items-center'>
              <span className='text-red-400'>
                {numberFormatter.format(movie.vote_count)}{' '}
                <span className='text-[10px] text-white'>votes</span>
              </span>
              <span className=''>
                {dateFormatter.format(new Date(movie.release_date).valueOf())}
              </span>
            </div>
          </div>
        </div>
        <div className='absolute top-2 left-2 transform scale-x-0  origin-left group-hover:scale-x-100 transition-all delay-200 duration-200 backdrop-contrast-50 backdrop-blur-md text-sm p-1 bg-yellow-400 text-black rounded-sm min-w-[3ch] text-center'>
          <span className='font-["Lobster"]'>{movie.vote_average}</span>
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
