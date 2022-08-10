import Navbar from "../../components/navbar/Navbar";
import {useRef, useState, useEffect} from 'react';
import "./home.scss";
import React from "react";
import List from "../../components/list/List";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/banner";

import axios from "axios";

import MoviesGrid from "../../components/movies/MoviesGrid"

const baseMoviesURL = "http://localhost:8090/MoviesAndTvs/movies/";
const baseTvsURL = "http://localhost:8090/MoviesAndTvs/tvs/";


const Home = () => {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [movieItems, setMovieItems] = React.useState([]);
    const [tvItems, setTvItems] = React.useState([]);
    var movieurls=[];
    var tvurls=[];

React.useEffect(() => {
  fetch(`${baseMoviesURL}`)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setMovieItems(result);
        console.log(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, [])

React.useEffect(() => {
  fetch(`${baseTvsURL}`)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setTvItems(result);
        console.log(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, [])

if (error) {
  return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Loading...</div>;
} else {
   const movies=movieItems.map((item)=> item.featured);
   const tvs=tvItems.map((item)=> item.featured);
   console.log(movies);
   console.log(tvs);
   for (var i=0; i<movies.length; i++){
    
    if(movies[i]){
       
        movieurls.push(movieItems[i].smallPosterUrl);
        console.log(movieurls);
       
    }
    
  }
  for (var i=0; i<tvs.length; i++){
    
    if(tvs[i]){
       
        tvurls.push(tvItems[i].smallPosterUrl);
        console.log(tvurls);
       
    }
    
  }

  
  return (
    <div className="home">
      
      <Slider/>
      <h3 style={{color:"white",fontSize:30, margin:10}}>Movies</h3>
      <List urls = {movieurls} />
      <h3 style={{color:"white",fontSize:30, margin:10}}>TVs</h3>
      <List urls = {tvurls} />
      
      <Banner url={"https://images2.vudu.com/assets/row/banner/205966-1305"}/>
      <Banner url={"https://images2.vudu.com/assets/mixMatch/banner/205940-1305"}/>
      
    </div>
  );
}
};

export default Home;

