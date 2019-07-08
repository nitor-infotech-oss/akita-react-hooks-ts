import React from 'react';

import { threadService } from '../../core/threads/thread.service';
import { threadQuery } from '../../core/threads/thread.query';
import useSelector from '../useSelector';
import Comment from './Comment';

const useThreadService = () => {
  const comments = useSelector(threadQuery.currentPostComments, []);
  const isLoading = useSelector(threadQuery.isLoading, false);
  const currentPostId = useSelector(threadQuery.currentPostId, '');

  return [comments, isLoading, currentPostId];
};

export const Thread = () => {
  const [comments, isLoading, currentPostId] = useThreadService();

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
