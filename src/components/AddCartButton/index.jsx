import PropTypes from 'prop-types';
import React from 'react';
import './AddCartButton.scss';

function AddCartButton({ onClick }) {
  return (
    <button
      className="add_cart_button"
      onClick={onClick}
      data-cy="add-cart-button"
      type="button"
    >
      ADD TO CART
    </button>
  );
}

AddCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddCartButton;
