import React from 'react';

import ThreadList from '../ThreadList/index';
import Thread from '../Thread/index';

export const Home = () => {
  return (
    <div>
      <div>
        <ThreadList />
      </div>
      <div>
        <Thread />
      </div>
    </div>
  );
};

export default Home;
