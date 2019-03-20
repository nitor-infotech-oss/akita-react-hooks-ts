import React, { useState, useEffect } from 'react';

import { threadService } from '../../core/threads/thread.service';
import { threadQuery } from '../../core/threads/thread.query';
import { subscribeHelper } from '../Utils/helpers';
import Comment from './Comment';

export const Thread = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPostId, setCurrentPostId] = useState('');
  const [currentPost, setCurrentPost] = useState();
  const [comments, setCurrentPostComments] = useState();

  useEffect(() => {
    subscribeHelper(threadQuery.getCurrentPostId, setCurrentPostId);
  });

  useEffect(() => {
    subscribeHelper(threadQuery.getIsLoading, setIsLoading);
  });

  useEffect(() => {
    subscribeHelper(threadQuery.getCurrentPostComments, setCurrentPostComments);
  });

  useEffect(() => {
    subscribeHelper(threadQuery.getCurrentPost, setCurrentPost);
  });

  const closePost = () => {
    threadService.closeCurrentPost();
  };

  return (
    <div>
      {currentPostId !== '' ? (
        isLoading ? (
          <div className="alert alert-dark">Loading...</div>
        ) : (
          <div>
            <button
              className="btn btn-danger btn-block"
              type="button"
              onClick={closePost}
            >
              Close Comments
            </button>
            {comments.map((comment: any, index: any) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        )
      ) : null}
    </div>
  );
};

export default Thread;
