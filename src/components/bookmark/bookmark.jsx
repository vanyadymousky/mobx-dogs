import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import { bookmarksStore } from 'models/bookmarks';

export class Bookmark extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['breed']).isRequired,
    payload: PropTypes.string.isRequired,
  }

  addToBookmark = () => {
    const { type, payload } = this.props;
    bookmarksStore.addBookmark({
      type,
      payload,
    });
  }

  render() {
    return (
      <Button color="primary" onClick={this.addToBookmark}>Bookmark item</Button>
    );
  }
}
