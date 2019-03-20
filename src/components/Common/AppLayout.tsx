import React from 'react';

import Header from './Header';
import { threadService } from '../../core/threads/thread.service';

export const Layout = () => {
  const searchThread = (slug: string) => {
    threadService.getThread(slug);
  };

  return (
    <div>
      <div>
        <Header search={searchThread} />
      </div>
    </div>
  );
};

export default Layout;
