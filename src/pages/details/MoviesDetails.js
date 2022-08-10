import axios from "axios";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import { backdropClasses } from "@mui/material";
import './css/banner.css';


function MoviesDetails() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const {id}=useParams();
    const baseMoviesURL = "http://localhost:8090/MoviesAndTvs/"+id;
    console.log(baseMoviesURL);
   
    var movieId="";
    var movieReles="";
    var movieTitle="";
    var movieUrl="";
    var moviebackgroundImgUrl="";
    var movieSynopsis="";

        
    //const movies=movieItems.map((item)=> item.featured);
      
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    React.useEffect(() => {
      fetch(`${baseMoviesURL}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
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
      movieId=items.id;
      movieTitle= items.title;
      movieReles=items.synopsis;
      movieUrl=items.smallPosterUrl;
      moviebackgroundImgUrl=items.bigPosterUrl;
      movieSynopsis=items.synopsis;
      

       
      return (
        <>
        <div className="banner-container" style={{backgroundImage: `url(${moviebackgroundImgUrl})` }}>
       
          <img className="banner-payload-container"src={movieUrl}alt={movieTitle} loading="lazy"/>
                    
                     <div className="poster-container"> 
                     <h1 className="banner-description-title" >{movieTitle}</h1>
                     <div className="button-container">
                        <button className="banner-button">play</button>
                         <button className="banner-button">My List </button>
                     </div>
                      <hr></hr>
                      <hr></hr>
                      <hr></hr>
                      <hr></hr>
                       <p className="banner-description-synopsis">{movieSynopsis}</p>
                     </div>
                    
                    
                     
          
             </div>
          
              

   
            
            
            

        </>
        
        
      )
    }
  }
  export default MoviesDetails;