export const GET_IMAGE = "GET_IMAGE";
export const GET_IMAGE_START = "GET_IMAGE_START";
export const GET_IMAGE_END = "GET_IMAGE_END";
export const GET_IMAGE_SUCCESS = "GET_IMAGE_SUCCESS";
export const GET_IMAGE_FAILURE = "GET_IMAGE_FAILURE";

export type GetImageSucessAction = {
  type: typeof GET_IMAGE_SUCCESS;
  image?: string;
};

export type GetImageStartAction = {
  type: typeof GET_IMAGE_START;
  loading?: boolean;
};

export type GetImageEndAction = {
  type: typeof GET_IMAGE_END;
  loading?: boolean;
};

export type GetImageFailureAction = {
  type: typeof GET_IMAGE_FAILURE;
};

export type GetImageActions =
  | GetImageStartAction
  | GetImageEndAction
  | GetImageSucessAction
  | GetImageFailureAction;
