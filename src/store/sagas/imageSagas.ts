import {
  GET_IMAGE,
  GET_IMAGE_END,
  GET_IMAGE_FAILURE,
  GET_IMAGE_START,
  GET_IMAGE_SUCCESS,
  GetImageActions,
} from "../actions";
import { put, takeLatest, call } from "redux-saga/effects";
import * as apollo from "../../apollo";

type AnyAction = { type: string; [key: string]: any };

function* getImage({ payload: { width, height, options } }: AnyAction) {
  try {
    yield put<GetImageActions>({ type: GET_IMAGE_START });

    const result: {
      data: {
        image: {
          url: string;
        };
      };
    } = yield call(apollo.getImage, width, height, options);

    yield put<GetImageActions>({
      type: GET_IMAGE_SUCCESS,
      image: result?.data.image.url,
    });
    yield put<GetImageActions>({ type: GET_IMAGE_END });
  } catch (err) {
    yield put<GetImageActions>({ type: GET_IMAGE_FAILURE });
    yield put<GetImageActions>({ type: GET_IMAGE_END });
  }
}

export function* watchGetImage() {
  yield takeLatest(GET_IMAGE, getImage);
}
