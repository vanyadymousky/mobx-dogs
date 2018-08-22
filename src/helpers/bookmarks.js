import { allPass, propEq, compose, prop, last } from 'ramda';

export const getLastId = compose(prop('id'), last);

export const findByTypePayload = (type, payload) => allPass([propEq('type', type), propEq('payload', payload)]);
