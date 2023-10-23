import {
  GET_IMAGE_SUCCESS,
  GET_IMAGE_FAILURE,
  GET_IMAGE_START,
  GetImageActions,
  GET_IMAGE_END,
} from "../actions";
import { State } from ".";

export const initialState: State = { image: "", loading: false, error: false };

export function reducer(
  state = initialState,
  action: GetImageActions
): State {
  switch (action.type) {
    case GET_IMAGE_START:
      return { ...state, loading: true };
    case GET_IMAGE_END:
      return { ...state, loading: false };
    case GET_IMAGE_SUCCESS:
      return { ...state, image: action.image, error: false };
    case GET_IMAGE_FAILURE:
      return {...state, error: true}
    default:
      return state;
  }
}
