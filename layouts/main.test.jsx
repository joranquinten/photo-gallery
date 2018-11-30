import React from 'react';
import { shallow } from 'enzyme';

import Main from './main';

describe('Main', () => {
  it('should render without crashing', () => {
    expect(shallow(<Main>Children</Main>)).toMatchSnapshot();
  });
});
