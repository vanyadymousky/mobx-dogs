import { observable, action } from 'mobx';
import { toPairs } from 'ramda';
import { catchError, tap } from 'rxjs/operators';
import { getBreeds, getPhotos } from '../api/breeds';
import { getCount } from '../helpers/breeds';

export const createBreed = (name, subbreeds) => observable({
  name,
  subbreeds,
});

export const breedsStore = observable({
  items: [], // collection of breeds
  images: {},
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

  addBreed(breed) {
    this.items.push(breed);
  },

  fetch() {
    this.startProgress();
    return getBreeds().pipe(
      tap(this.stopProgress),
      catchError(this.stopProgress),
    ).subscribe((breeds) => {
      this.items = toPairs(breeds).map(breed => createBreed(...breed));
    });
  },

  fetchImages(breed) {
    this.startProgress();
    return getPhotos(breed).pipe(
      tap(this.stopProgress),
      catchError(this.stopProgress),
    ).subscribe((photos) => {
      this.images[breed] = photos;
    });
  },
}, {
  addBreed: action,
  fetch: action,
  fetchImages: action,
  startProgress: action.bound,
  stopProgress: action.bound,
});

// autorun(() => console.log(breedsStore.items));
