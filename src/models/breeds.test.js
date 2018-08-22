import { toJS } from 'mobx';
import { breedsStore, createBreed } from './breeds';

describe('breeds store', () => {
  test('should be default from scratch', () => {
    expect(toJS(breedsStore)).toMatchSnapshot();
  });

  test('should be in progress', () => {
    breedsStore.startProgress();
    expect(breedsStore.inProgress).toBe(true);
  });

  test('should add items', () => {
    breedsStore.addBreed(createBreed('testme', []));
    expect(toJS(breedsStore)).toMatchSnapshot();
  });
});

