import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({ search }) => {
  const [thread, setThread] = useState('');

  const searchThread = () => {
    search(thread);
  };

  const updateThread = e => {
    setThread(e.target.value);
  };

  return (
    <div className="form-inline">
      <input
        type="text"
        className="form-control"
        onChange={updateThread}
        value={thread}
        placeholder="Search Thread"
      />
      <button type="button" className="btn btn-primary" onClick={searchThread}>
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  search: PropTypes.func,
};

export default SearchForm;
