import PropTypes from 'prop-types';

// Componente MyButton
export const MyButton = ({ propiedad }) => {

    // Funcion
    const handleClick = (title) => {
        console.log('Click en el botón' + title);
    }

    {/* Disparando la funcion */}
    return (
        <button onClick={() => handleClick(propiedad)}>{propiedad}</button>
    );
}

MyButton.propTypes = {
    propiedad: PropTypes.string.isRequired,
};