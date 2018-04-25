import React from 'react';
import { format } from '../utils/utils.js';
import Loading from './Loading';

export default ({ selectedSubte, loading }) => (
  <div>
    {!selectedSubte.LineName && !loading ? (
      <p>Seleccione una Linea</p>
    ) : (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="fade-in">
            <h3 style={{ display: 'inline' }}>
              Línea {selectedSubte.LineName} -{' '}
            </h3>
            {selectedSubte.LineStatus == 'Normal' ? (
              <h3 style={{ color: 'green', display: 'inline' }}>
                {selectedSubte.LineStatus}
              </h3>
            ) : (
              <h3 style={{ color: 'red', display: 'inline' }}>
                {selectedSubte.LineStatus}
              </h3>
            )}
            <h4 id="Frequency">
              Subtes cada {format(selectedSubte.LineFrequency)} Minutos
            </h4>
          </div>
        )}
      </div>
    )}
  </div>
);
