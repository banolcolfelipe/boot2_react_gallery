import ParqueDelCafe5 from '../assets/img/ParqueDelCafe5.jpg'
import PropTypes from 'prop-types'

export const ParqueDelCafe = ( { className } ) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={ ParqueDelCafe5 } alt="Park Parque del café " />
        </div>
    )
}

ParqueDelCafe.PropTypes = {
    className: PropTypes.string
}