import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox/>);
});

afterEach(()=>{
  wrapper.unmount();
});

it('показаны текстовая область и кнопка отправки формы', () => {
  expect(wrapper.find('[data-test="component-text-area"]').length).toEqual(1);
  expect(wrapper.find('[data-test="component-submit-button"]').length).toEqual(1);
});
