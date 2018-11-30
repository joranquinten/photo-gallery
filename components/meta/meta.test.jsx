import React from 'react';
import { shallow } from 'enzyme';

import Meta from './meta';

describe('Meta', () => {
  it('should render without crashing', () => {
    expect(shallow(<Meta />)).toMatchSnapshot();
  });
});
