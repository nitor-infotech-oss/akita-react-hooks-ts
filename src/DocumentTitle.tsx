import React, { useEffect, useState } from 'react';

interface IDocumentTitle {
  prefix: string;
  listen: boolean;
}

export const DocumentTitle = ({ prefix, listen }: IDocumentTitle) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (listen) {
      const handler = (event: any) => {
        setPos({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener('mousemove', handler);

      return () => {
        window.removeEventListener('mousemove', handler);
      };
    }
  }, [listen]);

  useEffect(() => {
    document.title = `${prefix} - ${pos.x}, ${pos.y}`;
  }, [pos, prefix]);

  return <div>{`${prefix} - ${pos.x}, ${pos.y}`}</div>;
};

export default DocumentTitle;
