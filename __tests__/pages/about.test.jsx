import React from 'react';
import { shallow } from 'enzyme';

import About from '../../pages/about';

describe('About', () => {
  const mockContent = {
    id: 'id',
    title: 'title',
  };

  it('should render without crashing', () => {
    expect(shallow(<About content={mockContent} />)).toMatchSnapshot();
  });

  it('should render with contents provided', () => {
    expect(
      shallow(<About content={{ ...mockContent, contents: '<p>Contents</p>' }} />)
    ).toMatchSnapshot();
  });
});
