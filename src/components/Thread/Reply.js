import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Badge from '../Common/Badge';

export const Reply = ({ reply, counter }) => {
  if (reply.data.ups === undefined) {
    return null;
  }
  const replyDate = new Date(1000 * reply.data.created).toUTCString();

  return (
    <div className="alert text-left border-top-0">
      <div>
        <small>&#187;</small>
        reply from &nbsp;
        <a href={`https://www.reddit.com/user/${reply.data.author}`}>
          {reply.data.author}
        </a>
        &nbsp;
        <small> on {replyDate}</small>
      </div>
      <Badge type="success" label="Ups" count={reply.data.ups} />
      <Badge type="danger" label="Downs" count={reply.data.downs} />
      <p />
      <ReactMarkdown source={reply.data.body} />
      {reply.data.replies.data
        ? reply.data.replies.data.children.map((reply, index) => (
            <Reply
              key={index}
              counter={`${counter}-${index + 1}`}
              reply={reply}
            />
          ))
        : null}
    </div>
  );
};

Reply.propTypes = {
  reply: PropTypes.object,
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Reply;
