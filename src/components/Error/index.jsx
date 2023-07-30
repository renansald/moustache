import ErrorIcon from '@mui/icons-material/Error';
import React from 'react';
import './Error.scss';

function Error() {
  return (
    <div
      className="error"
      data-cy="error"
    >
      <ErrorIcon
        color="error"
        style={{ fontSize: '100px' }}
        data-cy="error-icon"
      />
      <span
        className="error__message"
        data-cy="error-message"
      >
        Sorry, we had some problems to get your product
      </span>
      <span
        data-cy="error-message-try-again"
      >
        Please, try again later
      </span>
    </div>
  );
}

export default Error;
