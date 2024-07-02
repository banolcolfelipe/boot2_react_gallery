import Filandia4 from '../assets/img/Filandia4.jpeg'
import PropTypes, { string } from 'prop-types'

export const Filandia = ( { className } ) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={Filandia4} alt="Filandia's square" />
        </div>
    )
}

Filandia.PropTypes = {
    className: PropTypes,string
}