import Salento1 from '../assets/img/Salento1.jpg'
import PropTypes from 'prop-types';

export const Salento = ( {className} ) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={Salento1} alt="Salento's Square, Quindio" className="image" />
        </div>
    )
}

Salento.PropTypes = {
    className: PropTypes.string
}