import React from 'react';
import { shallow } from 'enzyme';

import Picture from './picture';

describe('Picture', () => {
  it('should render without crashing', () => {
    expect(shallow(<Picture url="someURL" />)).toMatchSnapshot();
  });

  it('should render with title and tags provided', () => {
    expect(shallow(<Picture url="someURL" title="title" tags={['tag']} />)).toMatchSnapshot();
    expect(
      shallow(<Picture url="someURL" title="title" tags={['tag', 'multiple']} />)
    ).toMatchSnapshot();
  });
});
