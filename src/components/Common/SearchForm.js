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
    <div>
      <input
        type="text"
        onChange={updateThread}
        value={thread}
        placeholder="Search Thread"
      />
      <button type="button" onClick={searchThread}>
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  search: PropTypes.func,
};

export default SearchForm;
