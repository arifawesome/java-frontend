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


function TvDetails() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const {id}=useParams();
    const baseTvURL = "http://localhost:8090/MoviesAndTvs/"+id;
   
   
    var tvId="";
    var tvReles="";
    var tvTitle="";
    var tvUrl="";
    var tvbackgroundImgUrl="";
    var tvSynopsis="";

        
    //const movies=movieItems.map((item)=> item.featured);
      
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    React.useEffect(() => {
      fetch(`${baseTvURL}`)
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
      tvId=items.id;
      tvTitle= items.title;
      tvReles=items.synopsis;
      tvUrl=items.smallPosterUrl;
      tvbackgroundImgUrl=items.bigPosterUrl;
      tvSynopsis=items.synopsis;
      

       
      return (
        <>
        <div className="banner-container" style={{backgroundImage: `url(${tvbackgroundImgUrl})` }}>
       
          <img className="banner-payload-container"src={tvUrl}alt={tvTitle} loading="lazy"/>
                    
                     <div className="poster-container"> 
                     <h1 className="banner-description-title" >{tvTitle}</h1>
                     <div className="button-container">
                        <button className="banner-button">play</button>
                         <button className="banner-button">My List </button>
                     </div>
                      <hr></hr>
                      <hr></hr>
                      <hr></hr>
                      <hr></hr>
                       <p className="banner-description-synopsis">{tvSynopsis}</p>
                     </div>
                    
                    
                     
          
             </div>
          
              

   
            
            
            

        </>
        
        
      )
    }
  }
  export default TvDetails;