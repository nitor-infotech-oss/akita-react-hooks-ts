import React, { useState, useEffect } from 'react';

import List from './List';
import { threadService } from '../../core/threads/thread.service';
import { threadQuery } from '../../core/threads/thread.query';
import { subscribeHelper } from '../Utils/helpers';

import searchGif from '../../assets/searching.gif';

export const ThreadList = () => {
  const [threads, setThreads] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const [currentPostId, setCurrentPostId] = useState('');

  useEffect(() => {
    subscribeHelper(threadQuery.getThread, setThreads);
  }, []);

  useEffect(() => {
    subscribeHelper(threadQuery.getIsSearching, setIsSearching);
  }, []);

  useEffect(() => {
    subscribeHelper(threadQuery.getCurrentPostId, setCurrentPostId);
  }, []);

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
