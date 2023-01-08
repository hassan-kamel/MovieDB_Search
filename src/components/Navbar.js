import React from 'react';

const Navbar = () => {
  return (
    <nav className='px-3 bg-transparent fixed inset-0 '>
      <div className='container mx-auto max-w-screen-lg overflow-hidden'>
        <div className='flex justify-between items-center gap-2'>
          <div className=''>
            <img className='w-20 h-20' src='tv-movie.png' alt='Logo' />
          </div>
          <div className=''>
            <ul className='flex justify-start items-center gap-10'>
              <li className='font-bold text-lg hover:text-red-600 cursor-pointer transition-all duration-200 relative hover:after:scale-x-100 after:transform after:block after:scale-x-0 after:absolute after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300'>
                Movies
              </li>
              <li className='font-bold text-lg hover:text-red-600 cursor-pointer transition-all duration-200 relative hover:after:scale-x-100 after:transform after:block after:scale-x-0 after:absolute after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300'>
                TV
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
