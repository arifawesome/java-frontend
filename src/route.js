import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home"
import MoviesGrid from "./components/movies/MoviesGrid";
import TvGrid from "./components/tv/TvGrid";
import MoviesDetails from "./pages/details/MoviesDetails";
import TvsDetails from "./pages/details/TvsDetails";
import {  Routes, Link, Route } from 'react-router-dom';
import Footer from "./components/footer/Footer"



const Root=()=> {

    return (
      <div>
       
        <Navbar />
        
           <Routes>
                <Route exact path="/" element={<Home/> } />
          <Route  path="/movies" element={<MoviesGrid/>} />
          <Route  path="/tvs" element={<TvGrid />} />
           <Route  path="/movies/:id" element={<MoviesDetails/>} />
          <Route  path="/tvs/:id" element={<TvsDetails />} />
          
            </Routes>
          
          
              <Footer/>
      </div>
    );
  }
  export default Root;