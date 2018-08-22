import { RouterStore } from 'mobx-react-router';
import { bookmarksStore } from 'models/bookmarks';
import { breedsStore } from 'models/breeds';

// mobx-react-router
const routingStore = new RouterStore();

export const stores = {
  routingStore,
  breedsStore,
  bookmarksStore,
};
