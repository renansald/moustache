import PropTypes from 'prop-types';
import React from 'react';
import './SizeButton.scss';

function SizeButton({ onClick, title, isActive }) {
  return (
    <button
      className={`size-button${isActive ? '__active' : ''}`}
      onClick={onClick}
      data-cy="size-button"
      type="button"
    >
      {title}
    </button>
  );
}

SizeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

SizeButton.defaultProps = {
  isActive: false,
};

export default SizeButton;
