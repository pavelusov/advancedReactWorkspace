import { SAVE_COMMENT } from './types';

export default function comments(state = [], action) {
  switch (action.type) {

    case SAVE_COMMENT:
      return [...state, action.comment];

    default:
      return state;
  }
}
