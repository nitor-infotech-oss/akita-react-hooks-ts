import React, { useState, useEffect } from 'react';

import { threadQuery } from '../core/threads/thread.query';

export const ThreadList = () => {
  const [threads, setThreads] = useState();

  useEffect(() => {
    const subscription = threadQuery.getThread().subscribe(data => {
      console.log(data);
      setThreads(data);
    });

    return () => {
      subscription.unsubscribe();
    };
  });

  return (
    <div>
      <h1>Threads</h1>
      <ul>
        {(threads || []).map((thread: any) => (
          <li key={thread.data.id}>{thread.data.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;
