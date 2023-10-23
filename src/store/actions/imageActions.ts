import { GET_IMAGE } from "./types";

export function getImage(payload: {
  width: string;
  height: string;
  options: string | null;
}) {
  return {
    type: GET_IMAGE,
    payload,
  };
}
