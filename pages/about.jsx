import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import renderHTML from 'react-render-html';

import contentfulClient from '../common/contentful/contentful-client';
import { mapPageItem } from '../common/contentful/contentful-helpers';

import Main from '../layouts/main';

class About extends React.Component {
  static async getInitialProps() {
    const client = contentfulClient();

    const requestQuery = {
      content_type: 'page',
      'fields.link': 'about',
    };

    const response = await client.getEntries(requestQuery);
    const responseItem = mapPageItem(response.items);

    return { content: responseItem };
  }

  render() {
    const {
      content: { title, contents },
    } = this.props;

    return (
      <Main>
        <div className="about">
          <h1>{title}</h1>
          {renderHTML(contents)}
        </div>
        <style jsx>{`
          .about {
            padding: 0 1em;
            max-width: 800px;
            margin: 0 auto;
          }
        `}</style>
      </Main>
    );
  }
}

About.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    contents: PropTypes.string,
  }).isRequired,
};

export default withRouter(About);
