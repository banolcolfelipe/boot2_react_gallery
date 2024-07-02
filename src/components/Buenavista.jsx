import Buenavista2 from '../assets/img/Buenavista2.jpg';
import PropTypes from 'prop-types';

export const Buenavista = ( { className } ) => {
    return(
        <div className={`image-container ${className}`}>
            <img src= {Buenavista2} alt=" A place to drink coffee in Buenavista, Quindio" className = "image" />
        </div>
    )
}

Buenavista.PropTypes = {
    className: PropTypes.string
}