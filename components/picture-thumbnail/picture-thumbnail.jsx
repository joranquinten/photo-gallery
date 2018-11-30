import React from 'react';
import PropTypes from 'prop-types';

const PictureThumbnail = ({ thumbnailUrl, title, tags }) => (
  <React.Fragment>
    <figure>
      <img src={thumbnailUrl} alt={title} />
      <figcaption>
        <span className="thumbnail-title">{title}</span>
        {tags && (
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={`tag_${index}`} className="tag">
                {tag}
                {index + 1 < tags.length ? ', ' : ' '}
              </span>
            ))}
          </div>
        )}
      </figcaption>
    </figure>

    <style jsx>{`
      figure {
        position: relative;
        margin: 0;
        padding: 0;
        height: 300px;
        overflow: hidden;
      }

      figcaption {
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
        color: rgb(255, 255, 255);
        padding: 10px;
        transform: translateY(calc(100% - 60px));

        transition-property: transform;
        transition-duration: 1s;
        transition-timing-function: ease;
      }

      figure:focus figcaption,
      figure:hover figcaption {
        transform: translateY(-100%);
      }

      .thumbnail-title {
        font-size: 26px;
        line-height: 32px;
        font-weight: bold;
      }

      .tags {
        font-size: 0.72em;
        line-height: 1.4em;
        text-transform: lowercase;
      }
    `}</style>
  </React.Fragment>
);

PictureThumbnail.propTypes = {
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

PictureThumbnail.defaultProps = {
  title: '',
  tags: [],
};

export default PictureThumbnail;
