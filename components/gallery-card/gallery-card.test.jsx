import React from 'react';
import { shallow } from 'enzyme';

import GalleryCard from './gallery-card';

describe('GalleryCard', () => {
  it('should render without crashing', () => {
    expect(shallow(<GalleryCard title="title" slug="slug" />)).toMatchSnapshot();
  });

  it('should render with description as HTML', () => {
    expect(
      shallow(<GalleryCard title="title" slug="slug" description="<p>Description as HTML</p>" />)
    ).toMatchSnapshot();
  });
});
