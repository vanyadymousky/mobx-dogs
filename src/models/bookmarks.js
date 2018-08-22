import { complement, find, values } from 'ramda';
import { observable, action, reaction } from 'mobx';
import { findByTypePayload, getLastId } from '../helpers/bookmarks';

const createBookmark = (id, type, payload) => observable({
  id,
  type,
  payload,
});

export const bookmarksStore = observable({
  items: [],
  get count() {
    return this.items.length;
  },
  get lastId() {
    return getLastId(this.items) || 0;
  },
  // Add bookmark if it wasn't added before
  addBookmark(bookmark) {
    if (!this.isAdded(bookmark)) {
      this.items.push(createBookmark(this.lastId + 1, ...values(bookmark)));
    }
  },
  removeBookmark({ type, payload }) {
    this.items = this.items.filter(complement(findByTypePayload(type, payload)));
  },
  // Bookmark was already added?
  isAdded({ type, payload }) {
    return !!find(findByTypePayload(type, payload), this.items);
  },
}, {
  addBookmark: action,
  removeBookmark: action,
});

reaction(() => bookmarksStore.lastId, lastId => console.log('reaction goes, ', lastId));
// will not get triggered if items[0].payload is changed for example

// autorun(() => console.log(bookmarksStore.items));
