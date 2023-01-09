import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  console.log('pathname: ', pathname);

  return (
    <nav className='px-3 bg-transparent fixed top-0 left-0 right-0 z-20 backdrop-blur-md backdrop-brightness-50'>
      <div className='container mx-auto max-w-screen-lg overflow-hidden'>
        <div className='flex justify-between items-center gap-2'>
          <div className=''>
            <img className='w-20 h-20' src='tv-movie.png' alt='Logo' />
          </div>
          <div className=''>
            <ul className='flex justify-start items-center gap-10'>
              <Link to='/movies'>
                <li
                  className={` ${
                    pathname === '/movies' ? 'text-red-600' : ''
                  } font-bold text-lg hover:text-red-600 cursor-pointer transition-all duration-200 relative hover:after:scale-x-100 after:transform after:block after:scale-x-0 after:absolute after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300`}>
                  Movies
                </li>
              </Link>
              <Link to='/series'>
                <li
                  className={` ${
                    pathname === '/series' ? 'text-red-600' : ''
                  } font-bold text-lg hover:text-red-600 cursor-pointer transition-all duration-200 relative hover:after:scale-x-100 after:transform after:block after:scale-x-0 after:absolute after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300`}>
                  TV Series
                </li>
              </Link>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
