import React from 'react';
import PropTypes from 'prop-types';

import Badge from '../Common/Badge';

export const List = ({ items, open }) => {
  const openThread = (slug, threadId) => () => {
    open(slug, threadId);
  };

  return (
    <div>
      {(items || []).map(thread => (
        <div className="card" key={thread.data.id}>
          <div className="card-header">
            <a href={thread.data.url} rel="noopener noreferrer" target="_blank">
              {thread.data.title}
            </a>
          </div>
          <div className="card-body">
            <img
              src={
                thread.data.thumbnail &&
                thread.data.thumbnail.indexOf('https') >= 0
                  ? thread.data.thumbnail
                  : 'https://www.redditstatic.com/avatars/avatar_default_04_D4E815.png'
              }
              height={60}
              width={60}
              alt="Avatar"
            />
            <h5 className="card-title">{thread.data.title}</h5>
            <p className="card-text">
              <Badge
                count={thread.data.num_comments}
                label="Comments"
                type="primary"
              />
              <Badge count={thread.data.ups} label="Ups" type="success" />
              <Badge count={thread.data.downs} label="Downs" type="danger" />
              <Badge count={thread.data.score} label="Score" type="info" />
            </p>
            <button
              className="btn btn-success btn-block"
              type="button"
              onClick={openThread(thread.data.subreddit, thread.data.id)}
            >
              Open
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array,
  open: PropTypes.func,
};

export default List;
