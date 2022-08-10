import "./app.scss"
import Home from "./pages/home/Home";

import Root from "./route"
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (<BrowserRouter>
  
    <Root/>
    </BrowserRouter>
   )
  
};

export default App;