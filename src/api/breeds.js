import { prop } from 'ramda'; 
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

export const getBreeds = () =>
  ajax.getJSON('https://dog.ceo/api/breeds/list/all').pipe(map(prop('message'))); // eslint-disable-line ramda/map-simplification
