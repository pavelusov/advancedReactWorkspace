import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentList/>
    </Root>);
});

afterEach(() => {
  wrapper.unmount();
});

it('Отображается коментарий', () => {

});



