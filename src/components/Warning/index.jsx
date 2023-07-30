import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PropTypes from 'prop-types';
import React from 'react';
import './Warning.scss';

function Warning({ message, onClick }) {
  return (
    <div
      className="warning"
      data-cy="warning"
    >
      <WarningAmberIcon
        color="warning"
        style={{ fontSize: '100px' }}
        data-cy="warning-icon"
      />
      <span
        className="warning__message"
        data-cy="warning-message"
      >
        {message}
      </span>
      <button
        className="warning__button"
        data-cy="warning-button"
        onClick={onClick}
        type="button"
      >
        Close
      </button>
    </div>
  );
}

Warning.propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Warning;
