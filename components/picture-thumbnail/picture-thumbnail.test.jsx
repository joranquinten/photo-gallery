import React from 'react';
import { shallow } from 'enzyme';

import PictureThumbnail from './picture-thumbnail';

describe('PictureThumbnail', () => {
  it('should render without crashing', () => {
    expect(shallow(<PictureThumbnail thumbnailUrl="someURL" />)).toMatchSnapshot();
  });

  it('should render with title and tags provided', () => {
    expect(
      shallow(<PictureThumbnail thumbnailUrl="someURL" title="title" tags={['tag']} />)
    ).toMatchSnapshot();
    expect(
      shallow(<PictureThumbnail thumbnailUrl="someURL" title="title" tags={['tag', 'multiple']} />)
    ).toMatchSnapshot();
  });
});
