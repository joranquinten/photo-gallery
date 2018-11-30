import React from 'react';
import PropTypes from 'prop-types';

import { imageLoader } from '../../common/utils/preloaders';
import { Loader } from '..';

class Picture extends React.Component {
  constructor() {
    super();

    this.state = { isLoading: false, imageRatio: 1 };
  }

  componentWillMount() {
    // Preload image URL
    const { url } = this.props;
    this.preloadImage(url);
  }

  preloadImage(url) {
    this.setState({ isLoading: true });

    if (process.browser) {
      try {
        const downloadingImage = new Image();
        downloadingImage.src = url;
        downloadingImage.onload = () => {
          this.setState({
            isLoading: false,
            imageRatio: parseFloat(
              (downloadingImage.naturalHeight / downloadingImage.naturalWidth).toFixed(5)
            ),
          });
        };
      } catch (error) {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { url, title, tags } = this.props;
    const { isLoading, imageRatio } = this.state;

    return (
      <React.Fragment>
        {isLoading ? (
          <Loader>
            <div className="loader">{`Loading ${title}...`}</div>
          </Loader>
        ) : (
          <figure>
            <img src={url} alt={title} />
            <figcaption>
              <span className="title">{title}</span>
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
        )}

        <style jsx>{`
          .loader {
            padding: 2em;
          }

          figure {
            position: relative;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            overflow: hidden;
          }

          img {
            max-width: calc(100vw - 200px);
            max-height: calc(100vh - 200px);
            object-fit: scale-down;
          }

          figcaption {
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            color: rgb(255, 255, 255);
            padding: 100px;
            opacity: 0;
            transform: rotate(0deg) translateY(calc(300% + 100px));

            transition-property: transform, opacity;
            transition-duration: 0.4s;
            transition-timing-function: ease-in-out;
          }

           {
            /*
          figure:focus figcaption,
          figure:hover figcaption {
            opacity: 1;
            transform: translateY(100%);
          }
          */
          }

          .title {
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
  }
}

Picture.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

Picture.defaultProps = {
  title: '',
  tags: [],
};

export default Picture;
