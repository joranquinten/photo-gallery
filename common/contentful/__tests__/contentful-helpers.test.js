import { mapCollectionItem, mapPageItem, mapPictureItem } from '../contentful-helpers';

jest.mock('@contentful/rich-text-html-renderer', () => ({
  documentToHtmlString: string => string,
}));

describe('contentful-helpers', () => {
  describe('mapCollectionItem', () => {
    const contentfulOutput = [
      {
        sys: { id: 1 },
        fields: {
          title: 'title',
          slug: 'slug',
          description: '<p>description</p>',
        },
      },
    ];

    it('should format the input in a correct way', () => {
      expect(mapCollectionItem(contentfulOutput)).toMatchSnapshot();
    });
  });
  describe('mapPageItem', () => {
    const contentfulOutput = [
      {
        sys: { id: 1 },
        fields: {
          title: 'title',
          slug: 'slug',
          contents: '<p>contents</p>',
        },
      },
    ];

    it('should format the input in a correct way', () => {
      expect(mapPageItem([undefined])).toMatchSnapshot();
      expect(mapPageItem(contentfulOutput)).toMatchSnapshot();
    });
  });
  describe('mapPictureItem', () => {
    const contentfulOutput = [
      {
        sys: { id: 1 },
        fields: {
          title: 'title',
          tags: 'tags',
          slug: 'slug',
          description: '<p>description</p>',
          file: {
            fields: {
              file: {
                contentType: 'image/jpeg',
                url: 'imageUrl',
                details: {
                  image: {
                    width: 400,
                    height: 300,
                  },
                  size: 10000,
                },
              },
            },
          },
        },
      },
    ];

    it('should format the input in a correct way', () => {
      expect(mapPictureItem(contentfulOutput)).toMatchSnapshot();
    });

    it('should overwrite the thumbnail presets', () => {
      expect(mapPictureItem(contentfulOutput, 100, 100)).toMatchSnapshot();
    });
  });
});
