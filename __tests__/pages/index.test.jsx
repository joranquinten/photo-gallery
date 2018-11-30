import React from 'react';
import { shallow } from 'enzyme';

import Gallery from '../../pages/index';

describe('Gallery', () => {
  const mockContent = [
    {
      id: 'contentId',
      title: 'contentTitle',
    },
  ];

  it('should render without crashing', () => {
    expect(shallow(<Gallery type="type" content={mockContent} />)).toMatchSnapshot();
  });

  it('should render with propTypes provided', () => {
    expect(shallow(<Gallery type="type" slug="slug" content={mockContent} />)).toMatchSnapshot();
    expect(
      shallow(<Gallery type="type" pictureId="pictureId" content={mockContent} />)
    ).toMatchSnapshot();
    expect(
      shallow(
        <Gallery
          type="type"
          content={[
            ...mockContent,
            {
              id: 'contentId2',
              title: 'contentTitle2',
              slug: 'contentSlug2',
              description: 'contentDescription2',
              thumbnailUrl: 'contentThumbnailUrl2',
              tags: 'contentTags2',
              meta: 'contentMeta2',
            },
          ]}
        />
      )
    ).toMatchSnapshot();
  });
});
