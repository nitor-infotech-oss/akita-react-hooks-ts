import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from './SearchForm';

export const Header = ({ search }) => {
  return (
    <div>
      <SearchForm search={search} />
    </div>
  );
};

Header.propTypes = {
  search: PropTypes.func,
};

export default Header;
