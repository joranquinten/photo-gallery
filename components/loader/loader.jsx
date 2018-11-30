import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ children }) => (
  <div className="loader">
    {children || 'Loading...'}
    <style jsx global>{`
      .loader {
      }
    `}</style>
  </div>
);

Loader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
};

Loader.defaultProps = {
  children: null,
};

export default Loader;
