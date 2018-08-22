import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { inject } from 'mobx-react';

@inject('routingStore')
export class StateLink extends PureComponent {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    routingStore: PropTypes.shape({}).isRequired,
    replace: PropTypes.bool,
  };

  static defaultProps = {
    replace: false,
  };

  pushPath = (e) => {
    e.preventDefault();
    const { to, routingStore } = this.props;
    routingStore.push(to);
  };

  replacePath = (e) => {
    e.preventDefault();
    const { to, routingStore } = this.props;
    routingStore.replace(to);
  };

  render() {
    const { to, replace, children } = this.props;
    return (
      <a href={to} onClick={replace ? this.replacePath : this.pushPath}>{children}</a>
    );
  }
}
