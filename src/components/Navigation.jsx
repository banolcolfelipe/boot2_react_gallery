import { Link } from "react-router-dom";
import { Salento } from "./Salento";
import { Buenavista } from "./Buenavista";
import { Circasia } from "./Circasia";
import { Filandia } from "./Filandia"

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
      
      <Link to="/Salento1" className="links">
        <figure className="image-size">
          <Salento/>
          <figcaption>Salento</figcaption>
        </figure>
      </Link>
      
     <Link to="/Buenavista2" className="links">
        <figure className= "image-size">
          <Buenavista/>
          <figcaption>Buenavista</figcaption>
        </figure>
     </Link>
     
     <Link to="/Circasia3" className="links">
        <figure className= "image-size">
          <Circasia/>
          <figcaption>Circasia</figcaption>
        </figure>
     </Link> 

     <Link to="/Filandia4" className="links">
        <figure className= "image-size">
          <Filandia/>
          <figcaption>Filandia</figcaption>
        </figure>
     </Link> 


    </div>
  )
}
