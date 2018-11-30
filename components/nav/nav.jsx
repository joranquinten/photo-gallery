import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <React.Fragment>
    <nav>
      <Link prefetch href="/">
        <a>Gallery</a>
      </Link>
      <Link prefetch href="/about">
        <a>About</a>
      </Link>
    </nav>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Montserrat');

      nav {
        position: fixed;
        z-index: 10;
        background: #2ec4b6;
        padding: 1em;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        padding: 1em;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
      }

      a {
        color: #fdfffc;
        padding: 0 1em;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
      }

      a:hover,
      a:active,
      a:focus {
        color: #011627;
      }
    `}</style>
  </React.Fragment>
);

export default Nav;
