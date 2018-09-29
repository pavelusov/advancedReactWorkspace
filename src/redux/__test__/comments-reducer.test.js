import commentsReducer from '../comments/comments-reducer';
import { SAVE_COMMENT } from '../comments/types';

it('Отработал экшн SAVE_COMMENT', () => {
  const comment = 'Новый комментарий';
  const action = {
    type: SAVE_COMMENT,
    comment
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual([comment])
});