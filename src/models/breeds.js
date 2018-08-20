import { observable } from 'mobx';
import { toPairs } from 'ramda';
import { getBreeds } from '../api/breeds';
import { getCount } from '../helpers/breeds';

const createBreed = (name, subbreeds) => observable({
  name,
  subbreeds,
});

export const breedsStore = observable({
  items: [], // collection of breeds
  inProgress: false,

  get count() {
    return getCount(this.items);
  },

  startProgress() {
    this.inProgress = true;
  },

  stopProgress() {
    this.inProgress = false;
  },

  fetch() {
    this.startProgress();
    return getBreeds().subscribe((breeds) => {
      this.items = toPairs(breeds).map(breed => createBreed(...breed));
      this.stopProgress();
    });
  },
});
