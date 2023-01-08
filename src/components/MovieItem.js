import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className='group  xs:w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 transform transition-all duration-200 hover:scale-125 hover:z-10  rounded-md shadow-md relative cursor-pointer'>
      <div className='w-full '>
        <img
          className='w-full  rounded-t-md'
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=''
        />
      </div>
      <div className='w-full absolute top-2/3 transform scale-y-0 origin-top group-hover:scale-y-100 transition-all delay-200 duration-200 backdrop-brightness-50 backdrop-blur-md'>
        <div className='p-5'>
          <div className='flex gap-1'>
            <span>{}</span>
            <span></span>
          </div>
          <h4 className='uppercase text-sm'>{movie.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
