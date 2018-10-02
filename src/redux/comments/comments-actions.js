import axios from 'axios';
import {
  SAVE_COMMENT,
  FECTH_COMMENTS
} from './types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    comment
  }
}

export function fetchComments() {
  debugger;
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FECTH_COMMENTS,
    payload: response
  }
}