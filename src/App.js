import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import TvList from './components/TvList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="overflow-x-hidden min-h-screen bg-[url('https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-top bg-fixed text-white ">
      <div className='pt-[10vh] '>
        <Navbar />
        <Routes>
          <Route path='/movies' element={<MovieList />} />
          <Route path='/series' element={<TvList />} />
        </Routes>

        {/* <h2 className='text-3xl font-bold underline'>
          movies
          <pre>
            {movies &&
              movies.results &&
              movies.results.map((movie) => {
                return <h6 key={movie.id}>{movie.title}</h6>;
              })}
          </pre>
        </h2> */}
      </div>
    </div>
  );
}

export default App;
