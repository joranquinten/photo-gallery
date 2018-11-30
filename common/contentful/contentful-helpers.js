import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

/*
These functions exist to help in mapping deep or nested objects as delivered
from Contentful and flatten them to a standard which can easily be used
in components.
*/

// Takes in an item of the type `Collection` and extract the correct fields from the object
export const mapCollectionItem = collectionItem =>
  collectionItem.reduce(
    (items, item) => [
      ...items,
      {
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug,
        description: documentToHtmlString(item.fields.description),
      },
    ],
    []
  );

// Takes in an item of the type `Collection` and extract the correct fields from the object
export const mapPageItem = pageItems =>
  pageItems.reduce(
    (items, item) =>
      item
        ? {
            id: item.sys.id,
            title: item.fields.title,
            link: item.fields.slug,
            contents: documentToHtmlString(item.fields.contents),
          }
        : items,
    {}
  );

// Takes in an item of the type `Picture` and extract the correct fields from the object
export const mapPictureItem = (pictureItem, tumbnailWidth = 300, tumbnailHeight = 300) =>
  pictureItem.reduce((items, item) => {
    const imagePath = item.fields.file.fields.file;

    return [
      ...items,
      {
        id: item.sys.id,
        title: item.fields.title,
        tags: item.fields.tags,
        url: imagePath.url,
        meta: {
          width: imagePath.details.image.width,
          height: imagePath.details.image.height,
          size: imagePath.details.size,
          contentType: imagePath.contentType,
        },
        thumbnailUrl: `${imagePath.url}?fit=fill&w=${tumbnailWidth}&h=${tumbnailHeight}`,
      },
    ];
  }, []);
