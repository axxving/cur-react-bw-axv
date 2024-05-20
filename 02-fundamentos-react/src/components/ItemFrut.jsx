// Importación de PropTypes
import PropTypes from 'prop-types';

// Componente ItemFrut
export const ItemFrut = ({ item }) => {
    return (
        <li>
            {item}
        </li>
    );
}

ItemFrut.propTypes = {
    item: PropTypes.string.isRequired,
};
