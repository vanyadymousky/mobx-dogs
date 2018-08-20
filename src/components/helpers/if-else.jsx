import { Children } from 'react';
import PropTypes from 'prop-types';
import { ifElse, always, head, last, take } from 'ramda';

/**
 * Based on condition property returns either first element or second
 * @param children
 * @param condition
 * @returns {*}
 */
export const IfElse = ({ children, condition }) => ifElse(
  always(condition),
  head,
  last,
)(take(2, Children.toArray(children)));

IfElse.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  condition: PropTypes.bool.isRequired,
};
