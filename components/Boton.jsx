import React from 'react';

export default ({ selectedLine, onClick, LineName }) => (
  <React.Fragment>
    {!LineName ? (
      'Loading'
    ) : (
      <button
        className={LineName === selectedLine.LineName ? 'selectedLine' : ''}
        onClick={onClick}
      >
        {LineName}
      </button>
    )}
  </React.Fragment>
);
