import React from 'react';
import { shallow, mount } from 'enzyme';

import Root from 'Root';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <App/>
    </Root>
  );
});

it('показано поле для комментария', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('показан список комментариев ', () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
