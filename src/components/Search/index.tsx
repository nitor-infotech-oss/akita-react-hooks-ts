import React from 'react';

import SearchForm from './SearchForm';
import { threadService } from '../../core/threads/thread.service';

export const Search = () => {
  const searchThread = (slug: string) => {
    threadService.getThread(slug);
  };

  return (
    <div>
      <SearchForm search={searchThread} />
    </div>
  );
};

export default Search;
