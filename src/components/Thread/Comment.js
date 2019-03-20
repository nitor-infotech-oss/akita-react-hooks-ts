import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Reply from './Reply';
import Badge from '../Common/Badge';

const Comment = ({ comment }) => {
  if (comment.data.ups === undefined) {
    return null;
  }
  const commentDate = new Date(1000 * comment.data.created).toUTCString();

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="lead text-left">
          <Badge type="success" label="Ups" count={comment.data.ups} />
          <Badge type="danger" label="Downs" count={comment.data.downs} />
          <div>
            From &nbsp;
            <a href={`https://www.reddit.com/user/${comment.data.author}`}>
              {comment.data.author}
            </a>
            &nbsp;
            <small> on {commentDate}</small>
          </div>
          <p />
          <ReactMarkdown source={comment.data.body} />
        </div>
        {comment.data.replies
          ? comment.data.replies.data.children.map((reply, index) => (
              <Reply key={index} counter={index + 1} reply={reply} />
            ))
          : null}
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;
