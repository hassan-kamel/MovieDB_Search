import React, { useEffect } from 'react';
import { topSeries } from '../store/slices/serie';
import { useDispatch, useSelector } from 'react-redux';
import TvItem from './TvItem';

const TvList = () => {
  const tvs = useSelector((state) => state.tv.all);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topSeries());
  }, [dispatch]);

  return (
    <>
      <div className='mb-60 container mx-auto max-w-screen-lg'>
        <div className='mt-20 flex justify-center items-center flex-wrap gap-2'>
          {tvs ? (
            tvs.results &&
            tvs.results.map((tv) => {
              return <TvItem key={tv.id} tv={tv} />;
            })
          ) : (
            <div className='fixed inset-0 top-[10vh] w-screen h-screen flex justify-center items-center backdrop-blur-sm'>
              <div className=' animate-spin inline-block w-12 h-12 border-t-red-600 border-4 rounded-full'></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TvList;
