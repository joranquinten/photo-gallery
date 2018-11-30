import React from 'react';
import PropTypes from 'prop-types';

import Router, { withRouter } from 'next/router';
import Link from 'next/link';

import contentfulClient from '../common/contentful/contentful-client';
import { mapPictureItem, mapCollectionItem } from '../common/contentful/contentful-helpers';

import Main from '../layouts/main';
import { GalleryCard, Modal, PictureThumbnail, Picture } from '../components';

class Gallery extends React.Component {
  static async getInitialProps({ query: { slug, pictureId } }) {
    const type = slug ? 'pictures' : 'gallery';

    const client = contentfulClient();

    const requestQuery =
      type === 'pictures'
        ? {
            content_type: 'pictures',
            'fields.collection.sys.contentType.sys.id': 'collection',
            'fields.collection.fields.slug[in]': slug,
          }
        : { content_type: 'collection' };

    const response = await client.getEntries(requestQuery);

    const responseItems =
      type === 'pictures' ? mapPictureItem(response.items) : mapCollectionItem(response.items);

    return { type, slug, pictureId, content: responseItems };
  }

  render() {
    const { type, slug, pictureId, content } = this.props;

    const bigPicture = pictureId ? content.filter(item => item.id === pictureId)[0] : null;

    return (
      <Main>
        <div className="gallery">
          {type === 'gallery' ? (
            <ul className="galleries">
              {content.map(gallery => (
                <GalleryCard
                  key={gallery.id}
                  title={gallery.title}
                  slug={gallery.slug}
                  description={gallery.description}
                />
              ))}
            </ul>
          ) : (
            <React.Fragment>
              <ul className="pictures">
                {content.map(picture => (
                  <li key={picture.id} className="picture">
                    <Link
                      prefetch
                      as={`/${slug}/${picture.id}`}
                      href={`/?slug=${slug}&pictureId=${picture.id}`}
                    >
                      <a>
                        <PictureThumbnail
                          thumbnailUrl={picture.thumbnailUrl}
                          title={picture.title}
                          tags={picture.tags}
                          meta={picture.meta}
                        />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              {bigPicture && (
                <Modal
                  title={bigPicture.title}
                  closeModal={() => Router.push(`/?slug=${slug}`, `/${slug}`)}
                >
                  <Picture url={bigPicture.url} title={bigPicture.title} tags={bigPicture.tags} />
                </Modal>
              )}
            </React.Fragment>
          )}
        </div>
        <style jsx>{`
          .galleries {
            padding: 0 1em;
            max-width: 800px;
            margin: 0 auto;
          }
          ul {
            list-style-type: none;
            margin: 1em 0;
            padding: 0;
          }
          .pictures {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 0;
            padding: 0;
          }
          .picture {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }
        `}</style>
      </Main>
    );
  }
}

Gallery.propTypes = {
  type: PropTypes.string.isRequired,
  slug: PropTypes.string,
  pictureId: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,

      slug: PropTypes.string,
      description: PropTypes.string,

      thumbnailUrl: PropTypes.string,
      tags: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      meta: PropTypes.shape,
    }).isRequired
  ).isRequired,
};

Gallery.defaultProps = {
  slug: null,
  pictureId: null,
};

export default withRouter(Gallery);
