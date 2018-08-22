import React, { Component } from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import { IfElse } from '../helpers/if-else';

@inject('bookmarksStore')
export class Bookmark extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['breed']).isRequired,
    payload: PropTypes.string.isRequired,
    remove: PropTypes.bool,
    bookmarksStore: PropTypes.shape({
      count: PropTypes.number,
      items: PropTypes.arrayOf(PropTypes.shape({})),
    }).isRequired,
  };

  static defaultProps = {
    remove: false,
  };

  addToBookmark = () => {
    const { type, payload, bookmarksStore } = this.props;
    bookmarksStore.addBookmark({
      type,
      payload,
    });
  }

  removeFromBookmarks = () => {
    const { type, payload, bookmarksStore } = this.props;
    bookmarksStore.removeBookmark({
      type,
      payload,
    });
  }

  render() {
    return (
      <IfElse condition={this.props.remove}>
        <Button color="yellow-y30" onClick={this.removeFromBookmarks}>
          Unbookmark
        </Button>
        <Button color="primary" onClick={this.addToBookmark}>
          Bookmark
        </Button>
      </IfElse>
    );
  }
}
