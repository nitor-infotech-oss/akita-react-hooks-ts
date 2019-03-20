import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ label, type, count }) => (
  <span>
    &nbsp;<span className={`badge badge-pill badge-${type}`}>{count}</span>
    &nbsp;{label} &nbsp;
  </span>
);

Badge.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  count: PropTypes.number,
};

export default Badge;
