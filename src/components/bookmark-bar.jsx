import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import { IfElse } from './helpers/if-else';
import './bookmark-bar.scss';

@observer
export class BookmarkBar extends Component {
  @observable isOpen = false;

  @action
  toggle = () => {
    this.isOpen = !this.isOpen;
  }

  render() {
    const { count, items } = this.props.bookmarksStore;

    return (
      <ButtonDropdown isOpen={this.isOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          You have {count} items
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Breeds</DropdownItem>
          {items.map(item => (
            <DropdownItem key={item.payload}>
              <IfElse condition={item.type === 'breed'}>
                <Link to={`/breed/${item.payload}`} href={`/breed/${item.payload}`}>
                  {item.payload}
                </Link>
                {item.payload}
              </IfElse>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

BookmarkBar.propTypes = {
  bookmarksStore: PropTypes.shape({
    count: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};
