import axios from "axios";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

function MoviesGrid() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const baseMoviesURL = "http://localhost:8090/MoviesAndTvs/movies/";

        
        const navigate = useNavigate();
        const handleSeeMovieClick=(id)=>navigate(`/movies/${id}`)
      
  
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
            console.log(items);
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
        console.log(items)
      return (
        <div className="home">
  
      
      <h3 style={{color:"white",fontSize:30, margin:10}}>Movies</h3>
        <ImageList  style={{background: "grey", marginTop:10,marginLeft:100}} sx={{ width: 1400, height: 1000 }} cols={6} rowHeight={160}>
        {items.map((item) => (
          <ImageListItem key={item.id}>
            <img onClick={() => handleSeeMovieClick(`${item.id}`)}
              src={`${item.smallPosterUrl}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
             
          </ImageListItem>
        ))}
      </ImageList>
      </div>
        
      );
    }
  }
  export default MoviesGrid;