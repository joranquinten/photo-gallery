import React from 'react';
import { shallow } from 'enzyme';

import Loader from './loader';

describe('Loader', () => {
  it('should render without crashing', () => {
    expect(shallow(<Loader>Child</Loader>)).toMatchSnapshot();

    expect(shallow(<Loader />)).toMatchSnapshot();
  });
});
