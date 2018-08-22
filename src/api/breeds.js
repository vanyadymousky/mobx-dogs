import { prop } from 'ramda';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const mapResponse = map(prop('message')); // eslint-disable-line ramda/map-simplification

export const getBreeds = () =>
  ajax.getJSON('https://dog.ceo/api/breeds/list/all').pipe(mapResponse);

export const getPhotos = (breed, subbreed) => {
  const breedRequest = subbreed ? `${breed}/${subbreed}` : breed;
  return ajax.getJSON(`https://dog.ceo/api/breed/${breedRequest}/images`).pipe(mapResponse);
};
