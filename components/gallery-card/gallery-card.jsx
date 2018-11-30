import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import Link from 'next/link';

const GalleryCard = ({ title, slug, description }) => (
  <li>
    <h2>
      <Link prefetch as={`/${slug}`} href={`/?slug=${slug}`}>
        <a>{title}</a>
      </Link>
    </h2>
    {renderHTML(description)}
  </li>
);

GalleryCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string,
};

GalleryCard.defaultProps = {
  description: '',
};

export default GalleryCard;
