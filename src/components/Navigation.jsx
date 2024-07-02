import { Link } from "react-router-dom";
import { Salento } from "./Salento";
import { Buenavista } from "./Buenavista";

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
     
    </div>
  )
}
