import Circasia3 from '../assets/img/Circasia3.jpg';
import PropTypes from 'prop-types';

export const Circasia = ( { className } ) => {
    return (
        <div  className={`image-container ${className}`}>
            <img src={Circasia3} alt="Circassia's square" className='image'/>
        </div>
    )
}

Circasia.PropTypes = {
    className: PropTypes.string
}