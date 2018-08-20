import { compose, prop, last, find, allPass, propEq, values } from 'ramda';
import { observable } from 'mobx';

const getLastId = compose(prop('id'), last);

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
  // Bookmark was already added?
  isAdded({ type, payload }) {
    return !!find(allPass([propEq('type', type), propEq('payload', payload)]), this.items);
  },
});

// autorun(() => console.log(bookmarksStore.items));
