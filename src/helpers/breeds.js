import { compose, length, values } from 'ramda';

export const getCount = compose(length, values);
