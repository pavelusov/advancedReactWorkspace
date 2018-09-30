import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapper;
const initialState = {
  comments: [
    'Comment №1',
    'Comment №2'
  ]
};

beforeEach(() => {
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList/>
    </Root>);
});

afterEach(() => {
  wrapper.unmount();
});

it('Отображается коментарий', () => {
  expect(wrapper.find('[data-test="comment"]').length).toEqual(initialState.comments.length)
});

it('показан текст для каждого комментария из сегмента хранилища "comments"', () => {
  initialState.comments.forEach(comment => {
    expect(wrapper.render().text()).toContain(comment);
  })
});



