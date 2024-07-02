import Armenia6 from '../assets/img/Armenia6.jpg';
import PropTypes from 'prop-types';

export const Armenia = ({ className }) => {
    return(
        <div className={ `image-container ${className}` }>
            <img src={Armenia6} alt="Armenia City" className='image' />
        </div>
    )
}

Armenia.PropTypes = {
    className: PropTypes.string
}