import {
  SAVE_COMMENT,
  FECTH_COMMENTS
} from './types';

export default function comments(state = [], action) {
  switch (action.type) {

    case SAVE_COMMENT:
      return [...state, action.comment];

    case FECTH_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];

    default:
      return state;
  }
}
