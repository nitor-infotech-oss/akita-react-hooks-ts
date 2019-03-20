import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const DocumentTitle = ({ prefix, listen }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (listen) {
      const handler = event => {
        setPos({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener('mousemove', handler);

      return () => {
        window.removeEventListener('mousemove', handler);
      };
    }

    return () => null;
  }, [listen]);

  useEffect(() => {
    document.title = `${prefix} - ${pos.x}, ${pos.y}`;
  }, [pos, prefix]);

  return <h3>{`${prefix} - ${pos.x}, ${pos.y}`}</h3>;
};

DocumentTitle.propTypes = {
  prefix: PropTypes.string,
  listen: PropTypes.bool,
};

export default DocumentTitle;
