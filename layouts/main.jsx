import React from 'react';
import PropTypes from 'prop-types';

import { Meta, Nav } from '../components';

const Main = ({ children }) => (
  <React.Fragment>
    <Meta />
    <Nav />
    {children}
  </React.Fragment>
);

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
};

export default Main;
