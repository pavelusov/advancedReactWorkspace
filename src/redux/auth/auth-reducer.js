import { CHANGE_AUTH } from './types';

export default function auth(state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;

    default:
      return state;
  }
}
