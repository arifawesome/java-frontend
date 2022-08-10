import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";
import NestedModal from "../modal/NestedModal";
import {Link, useParams } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';

const Navbar = ({type}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  
  

  


  
    window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <a href="/"><img 
            src="https://logos.textgiraffe.com/logos/logo-name/Alt-designstyle-boots-o.png"
            alt=""
          /></a>
          <Link to="/movies" ><span>Movies</span></Link>
          <Link to="/tvs" ><span>Tvs</span></Link>
          <span>Free</span>
          <span>My Alt</span>
        </div>
        <div className="right">
         
          <span>Redeem</span>
          
          <NestedModal/>
        
    

        
          
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
