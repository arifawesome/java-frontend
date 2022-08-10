import "./banner.css";
const Banner = ({url}) => {
  return (
    <div style={{paddingTop:20,paddingBottom:20, paddingLeft:70, alignContent:"center", background:"RED"}}>
      <img style={{width:1500}} src={url} alt=""></img>
    </div>

   
  )
}

export default Banner;