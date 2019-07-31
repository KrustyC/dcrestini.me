import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const AnchorLink = ({ children, ...rest }) => {
  useEffect(() => {
    // eslint-disable-next-line
    require('smoothscroll-polyfill').polyfill();
  }, []);

  const onSmoothScroll = e => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    console.log(document.getElementById('scrollable'));
    document.getElementById('scrollable').scroll({
      top: document.getElementById(id).offsetTop - 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      {...rest}
      onClick={onSmoothScroll}
      role="button"
      tabIndex="0"
      onKeyDown={() => null}
    >
      {children}
    </a>
  );
};

AnchorLink.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AnchorLink;
