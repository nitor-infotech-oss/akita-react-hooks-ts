import React from 'react';

import List from './List';
import { threadService } from '../../core/threads/thread.service';
import { threadQuery } from '../../core/threads/thread.query';
import useSelector from '@nitor-infotech/rxjs-use-selector';

import searchGif from '../../assets/searching.gif';

const useThreadService = () => {
  const threads = useSelector(threadQuery.thread, []); // es6 / ts property as selector
  const isSearching = useSelector(threadQuery.getIsSearching, false); // function as selector
  const currentPostId = useSelector(threadQuery.currentPostId, '');

  return [threads, isSearching, currentPostId];
};

export const ThreadList = () => {
  const [threads, isSearching, currentPostId] = useThreadService();

  const openThread = (threadSlug: string, threadId: string) => {
    threadService.getPost(threadSlug, threadId);
  };

  return (
    <div>
      {currentPostId === '' ? (
        <div>
          {isSearching ? (
            <div>
              <img src={searchGif} alt="Searching..." />
            </div>
          ) : null}
          {threads && threads.length > 0 ? (
            <List items={threads} open={openThread} />
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default ThreadList;
