import { all } from 'redux-saga/effects';
import { watchGetImage } from './imageSagas';

export * from './imageSagas';

export function* rootSaga() {
  yield all([watchGetImage()]);
}