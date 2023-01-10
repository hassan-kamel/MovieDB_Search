import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieDetailed } from '../store/slices/movie';
import { useParams } from 'react-router-dom';

const MovieDetailed = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movie.detailed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieDetailed(id));
  }, [id, dispatch]);

  const numberFormatter = Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
  });
  const dateFormatter = Intl.DateTimeFormat('en', { dateStyle: 'medium' });

  return (
    <>
      {movie && (
        <>
          <img
            className='fixed z-0 inset-0 h-screen w-screen object-center '
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=''
          />
          <div className='fixed z-10 inset-0 h-screen w-screen backdrop-brightness-75 '></div>
          <div
            className={`fixed z-20 inset-0 h-screen w-screen min-h-screen pt-20 `}>
            <div className='container mx-auto max-w-screen-lg'>
              <div className='flex'>
                <span className=''>{numberFormatter.format(movie.budget)}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailed;
