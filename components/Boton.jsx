import React from 'react';

export default ({ selectedLine, onClick, LineName }) => (
  <div>
    {!LineName ? (
      'Loading'
    ) : (
      <div>
        <button
          className={LineName === selectedLine.LineName ? 'selectedLine' : ''}
          onClick={onClick}
        >
          {LineName}
        </button>
      </div>
    )}
  </div>
);
