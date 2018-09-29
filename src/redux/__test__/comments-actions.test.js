import { saveComment } from "../comments/comments-actions";
import { SAVE_COMMENT } from '../comments/types';

describe('saveComment action', () => {
  let action,
  comment = 'Новый коментарий';

  beforeEach(() => {
    action = saveComment(comment);
  });
  it('корректный тип экшена', () => {
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('передали корректный комментарий', function () {
    expect(action.comment).toEqual(comment);
  });
});
